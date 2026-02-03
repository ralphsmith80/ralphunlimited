---
title: Platform Independent 2D Game Engine
description: "I've finally done it!! My platform independent 2D game engine is
  finally here. I've tested this engine on Mac OSX, Ubuntu Linux, Windows, and
  here's the really "
pubDate: 2010-09-06T14:24:25.000Z
slug: platform-independent-2d-game-engine
categories:
  - development
---

I've finally done it!! My platform independent 2D game engine is finally here. I've tested this engine on Mac OSX, Ubuntu Linux, Windows, and here's the really awesome part iPhone. That's  a pretty large scope. Now you can make one game and distribute on just about any platform that supports C/C++.

Okay lets get back to earth. The cost of portability has put some rather large limitation on this engine. I've explained most of these in my previous post [2D Game Engine Mac OSX/Linux](http://ralphunlimited.com/?p=270) so I'll try to be brief here.


**iPhone**: The only caveat using this engine on the iPhone is that it only supports OpenGL ES 1.0.  It really wouldn't be that hard to add support for OpenGL ES 2.0 but supporting version 1.0 keeps the engine really concise with what is needed for the other platforms.

**All Platforms**: The only graphic formats supported are BMP and TARGA. For compatibility with  graphics cards that do not support images that are **not** a power of 2 you're TARGA images must be a power of 2. The BMP images can be any size the engine will automatically increase the image size to a power of 2 if it is not already a power of 2. I could have easily made the engine increase TARGA images also but I like to keep some of these things conscious in my mind.

The best way to work with this power of 2 limitation is to use the packed sprite sheet functionality. This is the ideal way you should do it anyway as it provides the best performance by using VBO's. The demo code uses the packed sprite sheet so you can look at the code for an example of how to do this. Here's a quick run down of what you need to do. Pack all your images using a image packer program. I use [Zwoptex](http://zwoptexapp.com/). You can pay for it if you need textures larger than 1024×1024 but they have a free flash version [here](http://zwoptexapp.com/flashversion) that works great and should work in most cases. Then change the PackSpriteSheetCoords.h file to reflect the output from you're image packer program.

The only sound format supported is uncompressed WAVE files. This means you will have large sound files. Also all WAVE files are not created equal. Many third parties have their own WAVE file format that will not work with this engine. I suggest converting all of your own WAVE files in a audio converter program to ensure they are in fact in a generic WAVE file format.


That's it! Those are considerable limitations but I feel it's worth the cost for portability. On a desktop the larger WAVE files really don't pose much of  a problem but for a large game on the iPhone you may run into problems. If nothing else this engine would be excellent for prototyping a multi-platform game. Once you have the basics of your game then all you'll need to do is optimize for platform specific performance. Such as adding support for a compressed audio format.


**Dependancies**: Okay now what about dependencies. This is why this engine is so portable. It has minimal dependancies. You only need [OpenGL](http://www.opengl.org/) and [OpenAL](http://connect.creativelabs.com/openal/default.aspx). If your using Linux you'll also need [glext.h](http://www.opengl.org/registry/api/glext.h) for VBO support. If you're using Windows you'll also need  [GLUT](http://www.opengl.org/resources/libraries/) and [GLee](http://elf-stone.com/glee.php) but not [glext.h](http://www.opengl.org/registry/api/glext.h). As of this posting Windows was only supporting OpenGL 1.1 and that's why we need the extra libraries. In the demo I use GLUT for the desktop demo to provide a portable way of creating a window (context and render buffer). If you want to you can manage the creation of a window yourself the engine doesn't care about that part.


Okay enough about limitations and requirements lets get to the download. In the zip file you will find two files Asteroid\_Demo and Asteroid\_Demo\_iPhone. Don't let this confuse you the engine code is the same in both projects I simply used two projects because the iPhone uses Objective-C for creating it's window. I provide the Xcode project for the iPhone so you have to do zero thinking.


**HEADS UP!!!** You'll want to change the path of the RESOURCE preprocessor definition in the Resources.h file for the iPhone project to reflect the absolute path of where you place the code on your machine. For all other platforms you shouldn't have to change anything. Read the README for compiling instructions. I have a Makefile for use on Mac OSX and Linux so all you have to do is open a X11 terminal and cd to the directory with the Makefile and type "make". You can create an Xcode project if you like but you'll need to change the RESOURCES preprocessor definition in Resources.h. If your really picky then you'll also notice in the game.h file for the iPhone project after I create the packed sprite sheet object I set it's scale to 0.65f. This was/is not nesaccery and for my initial testing I excluded doing that. However, since I'm using the same images for both demos scaling the images down makes it look a little better on the iPhone.


Finally … just one last little tid-bit. I'm offering my game engine here for free. By downloading this engine you acknowledge that I accept no responsibility of it's use. You are free to use it or modify it any way you want. This download is actually a small game that demonstrates a little bit of the engines capabilities. All image and sound files included are not mine so I cannot offer rights to these you will have to create your own images and sound files to use with this engine if you intend to sell it.


Special thanks to [Mike Daley](http://www.71squared.com/) and [Jonathan Harbour](http://www.jharbour.com). The knowledge I got form their websites, blogs, and books was priceless.


Enjoy!!!!

**Download**: [⬇️ Game Engine (ZIP)](/images/uploads/2010/08/Game_Engine.zip)
