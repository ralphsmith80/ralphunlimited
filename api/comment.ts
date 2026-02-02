/**
 * Vercel Serverless Function: Comment Handler
 * 
 * Receives comment submissions and creates a PR on GitHub for moderation.
 * Uses honeypot field to filter spam.
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

// GitHub API configuration
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO || 'QuantAlchemy/ralphunlimited';
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';

interface CommentData {
  postSlug: string;
  name: string;
  email?: string;
  content: string;
  website?: string; // Honeypot field
}

async function createGitHubPR(comment: CommentData): Promise<{ success: boolean; prUrl?: string; error?: string }> {
  if (!GITHUB_TOKEN) {
    console.error('GITHUB_TOKEN not configured');
    return { success: false, error: 'Server configuration error' };
  }

  const timestamp = new Date().toISOString();
  const commentId = Date.now();
  const branchName = `comment/${comment.postSlug}-${commentId}`;

  // Prepare comment YAML content
  const commentYaml = `- id: ${commentId}
  author: "${comment.name.replace(/"/g, '\\"')}"
  date: "${timestamp}"
  content: "${comment.content.replace(/"/g, '\\"').replace(/\n/g, '\\n')}"
  parent: null
`;

  try {
    // Get the current main branch SHA
    const refResponse = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/git/ref/heads/${GITHUB_BRANCH}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    if (!refResponse.ok) {
      throw new Error('Failed to get branch reference');
    }

    const refData = await refResponse.json();
    const baseSha = refData.object.sha;

    // Create a new branch
    const createBranchResponse = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/git/refs`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ref: `refs/heads/${branchName}`,
          sha: baseSha,
        }),
      }
    );

    if (!createBranchResponse.ok) {
      throw new Error('Failed to create branch');
    }

    // Check if comment file exists
    const filePath = `src/data/comments/${comment.postSlug}.yml`;
    let existingContent = '';
    let fileSha: string | undefined;

    try {
      const fileResponse = await fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/contents/${filePath}?ref=${branchName}`,
        {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: 'application/vnd.github.v3+json',
          },
        }
      );

      if (fileResponse.ok) {
        const fileData = await fileResponse.json();
        existingContent = Buffer.from(fileData.content, 'base64').toString('utf-8');
        fileSha = fileData.sha;
      }
    } catch {
      // File doesn't exist, that's fine
    }

    // Append new comment to existing content or create new file
    const newContent = existingContent ? `${existingContent}\n${commentYaml}` : commentYaml;

    // Create or update the file
    const updateFileResponse = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/${filePath}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `Add comment from ${comment.name} on ${comment.postSlug}`,
          content: Buffer.from(newContent).toString('base64'),
          branch: branchName,
          ...(fileSha && { sha: fileSha }),
        }),
      }
    );

    if (!updateFileResponse.ok) {
      throw new Error('Failed to create comment file');
    }

    // Create the PR
    const prResponse = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/pulls`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: `💬 New comment on "${comment.postSlug}" from ${comment.name}`,
          body: `## New Comment Submission\n\n**Post:** ${comment.postSlug}\n**Author:** ${comment.name}\n**Email:** ${comment.email || 'Not provided'}\n**Date:** ${timestamp}\n\n### Comment:\n\n${comment.content}\n\n---\n\n✅ Merge to approve | ❌ Close to reject`,
          head: branchName,
          base: GITHUB_BRANCH,
        }),
      }
    );

    if (!prResponse.ok) {
      throw new Error('Failed to create PR');
    }

    const prData = await prResponse.json();
    return { success: true, prUrl: prData.html_url };
  } catch (error) {
    console.error('GitHub API error:', error);
    return { success: false, error: 'Failed to submit comment' };
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data: CommentData = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    // Honeypot check - if filled, it's a bot
    if (data.website) {
      // Pretend success to fool the bot
      return res.status(200).json({ success: true });
    }

    // Validate required fields
    if (!data.postSlug || !data.name || !data.content) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Sanitize input
    const sanitized: CommentData = {
      postSlug: data.postSlug.replace(/[^a-z0-9-]/gi, '-'),
      name: data.name.slice(0, 100).trim(),
      email: data.email?.slice(0, 200).trim(),
      content: data.content.slice(0, 5000).trim(),
    };

    // Create GitHub PR
    const result = await createGitHubPR(sanitized);

    if (result.success) {
      return res.status(200).json({ success: true, message: 'Comment submitted for moderation' });
    } else {
      return res.status(500).json({ error: result.error });
    }
  } catch (error) {
    console.error('Comment handler error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
