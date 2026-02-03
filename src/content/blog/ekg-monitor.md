---
title: EKG Monitor
description: this is an excerpt about my ekg
pubDate: 2010-05-26T23:30:34.000Z
slug: ekg-monitor
categories:
  - development
---

**WHAT'S IT ALL ABOUT?!**

This application was a big step up from my Cook Book and from the screen shot you can see it's got a lot of buttons to play with! So what does this thing do anyway? Well I made it to graph your heart beat and provide a GPS location of your position, the EKG itself is wireless after all, but it provides a much more general function than just that. This GUI will actually read and plot any data coming in on a serial port.

If you'll look at the interface and if your familiar with serial port connections you'll recognize  two columns that allow you two configure and connect to one serial port each. The ECG Port reads data from the selected port and plots it in the gridded window. If the incoming data is such that it reaches the trigger thresh hold is crossed periodically such as a heart beat would then you will see the frequency in the Heart Rate section. If you're heart rate is to high you will see a warning message in the Alarm section. You can also adjust the gain and trigger of the graphing window with the supplied Alteration text boxes. This may be useful if you not just hooking up a heart.

Similarly, the GPS Port also reads data from the selected port. However, it's import to note the data coming in on the GPS Port is parsed by a string parser that's expecting a very specific type of input, so if you connect it to any random serial peripheral you will see no location information. If you're smart and you connect the right device then you'll see the GPS location in the Location windows provides.

So the only section I haven't talked about is the Operations section. This is where you get it all going. After you've made all of your port configurations and you don't have to have them both connected, in fact you don't have to have anything connected, however that would look very boring. Okay, configure you ports, and then click the Start button and watch it go. If you want to stop the click the Stop button. The other two buttons, Start/Stop Recording will record the incoming data to a text file called 'data.txt' that will be in the working directory of your application (where the executable is).

If your wondering how I made this thing wireless I used a bluetooth GPS unit and a pair of Mote Devices. The GPS device streams NMEA sentences to the bluetooth port which I had configured as a  virtual COM port. This virtual COM port thing isn't difficult if you get a cheap external bluetooth peripheral for your computer the driver you install will most likely do this for you. The Mote device on the actual EKG sent a digital heart beat signal to a receiving Mote that had a digital to analog daughter card on it. I cleverly soldered the output of the D-to-A converter to the correct pins of a standard serial connector and then plugged it into my computers serial port. Walla wireless EKG.

If your curious about the performance. It sucked! The bluetooth range was limit as expected however, what was not expected was the limited range and data rate that the Mote devices provided. All in all the GUI was great but the overall performance of the system was disappointing. On the bright side I did get and A 🙂
**WHY WOULD YOU DO SUCH A THING?**

I had to come up with something to do for my Senior design project, which I took during the summer semester, which put a bit of a time constraint on the whole thing but I also wanted to do something that was geared toward my interest in software. I know all of you software guru's out there are thinking this would be a piece of cake and your probably right if your a software guru. Most of my classes dealt with integrated circuit design so although I knew some software this involved a lot of unknowns for myself and just so you don't think I was going easy on myself I made the EKG wireless using Mote devices.

A Mote device is an ad hoc networking device that was designed at MIT for military applications. If you'd like to know more about these things Google for them. You'll find they are definitely not user friendly and often times fall sort their stated data rates as I found out myself. I would never recommend the use of one of these things.

**SCREEN SHOT**

[![EGK interface](http://ralphunlimited.com/wp-content/uploads/2010/05/EGK1.png "EGK interface")](http://ralphunlimited.com/wp-content/uploads/2010/05/EGK1.png)

EGK interface

**WHAT'S NEXT?**

Since this was for my Senior Design class, graduation that's what's next. After graduation I took a job with Applied Research Labs doing what was now one of my favorite things, designing GUI's.
**BEFORE YOU DOWNLOAD**

This was fun to make but it's still no commercial production application. It's provided here for you to use (change, study, break, whatever) at your own risk. I have tested and used it myself without a hiccup but that does not mean you will not have one. Okay now go ahead.
**THINGS TO KNOW**

Like my first GUI this is a C# application. This system will only run on a Windows machine. If you intend to develop this further then I assume you'll know what to do with the stuff in the zip file. If you just want to use it then I recommend you know something about serial ports first. Like most Windows applications you double click the application file to get things started. After you unzip the file the application can be found at

EKGMonitor/EKGMonitor/bin/Release/EKGMonitor.exe

Have FUN!!
**REFRENCES**

Check out [this page](http://www.eng.utah.edu/~jnguyen/ecg/ecg_index.html) for making a home made EKG
[Download EKG Monitor](/images/uploads/2010/05/EKGMonitor.zip)
