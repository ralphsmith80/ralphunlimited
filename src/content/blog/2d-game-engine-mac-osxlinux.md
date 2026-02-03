---
title: 2D Game Engine Mac OSX/Linux
description: If you've read my earlier posts then you'll know that I previously
  developed a 2D game called Space Challenge. While I developed all of the game
  code the engine
pubDate: 2010-08-22T22:20:38.000Z
slug: 2d-game-engine-mac-osxlinux
categories:
  - development
---

If you’ve read my earlier posts then you’ll know that I previously developed a 2D game called [Space Challenge](http://ralphunlimited.com/?p=10). While I developed all of the game code the engine I was using was mostly developed by Mike Daley of [71squared.com](http://71squared.com). For anyone who is interested in developing an iPhone game I would recommend you check out Mike’s site. I enjoyed what I learned from Mike but I really wanted an engine that would work on multiple platforms so that I could reach a larger audience.

So to get an engine that would suit my needs I decided to develop my own game engine using platform independent C++ code. This has been quite an under taking and my engine is not yet complete nor completely platform independent. However, I have finished a significant part of my engine and it works on both Mac OSX and Linux.

Another useful resource I found while developing this game engine was Jonathan S. Harbour’s book Advanced 2D Game Development. A lot of the game structure I learned from this book and to be quite honest the only thing I have against Jonathan’s engine is that it uses the DirectX graphics API which means it will only work on a Windows platform.

This engine uses OpenGL for it’s graphics. To keep it platform independent I am manually loading all images. For the time being the only image formats supported are uncompressed BMP and both compressed or uncompressed TARGA images. One caveat to note is that TARGA images will not work on systems with ATI graphics cards unless the image is a power of 2. The BMP images will work on the ATI graphics hardware in either case because I am increasing the images size to a power of 2 in software if it is not already.

For sound the engine I use OpenAL. Similar to the graphics portion I am manually loading all sound files to keep the engine platform independent. Currently the only sound file format supported is uncompressed WAVE files. This means the your sound files will be large and will require a significant amount of memory if you have a lot of different sounds. If you intend on using this for a production game I would highly recommend adding your own support for compressed sound files.

I’m offering my game engine here for free. By downloading this engine you acknowledge that I accept no responsibility of it’s use. You are free to use it or modify it any way you want. This download is actually a small game that demonstrates a little bit of the engines capabilities. All image and sound files included are not mine so I cannot offer rights to these you will have to create you own images and sound files to use with this engine if you intend to sell it.

Enjoy!!!!

**Download:** \[download id=”2″\]  
  

        ![](https://www.paypalobjects.com/en_US/i/scr/pixel.gif)
