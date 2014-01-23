---
layout: default
title: SEMterface
footer: true
---

# SEMterface

<a href="http://www.flickr.com/photos/bretc/12094290053/" title="Jeol SEM, on Flickr"><img class="img-polaroid" src="http://farm8.staticflickr.com/7374/12094290053_7ec70584dc_q.jpg" width="150" height="150" alt="Jeol SEM"></a>
<a href="http://www.flickr.com/photos/bretc/12080555383/" title="Bug Eye Zoomed out, on Flickr"><img class="img-polaroid" src="http://farm4.staticflickr.com/3746/12080555383_d7c40f33b3_q.jpg" width="150" height="150" alt="Bug Eye Zoomed out"></a>
<a href="http://www.flickr.com/photos/bretc/12080244105/" title="Bug Eye Medium, on Flickr"><img class="img-polaroid" src="http://farm8.staticflickr.com/7357/12080244105_1657b43f21_q.jpg" width="150" height="150" alt="Bug Eye Medium"></a>
<a href="http://www.flickr.com/photos/bretc/12080243605/" title="Bug Eye Zoomed in on Flickr"><img class="img-polaroid" src="http://farm8.staticflickr.com/7314/12080243605_3fe9322343_q.jpg" width="150" height="150" alt="Bug Eye Zoomed in"></a>

This is the description page for the SEMterface project at the [Erik Sanchez Nanodevelopment Lab](http://web.pdx.edu/~esanchez/sanchezTeam.html) at Portland State University.  Technical details and code can be found in the repository [README](https://github.com/bcomnes/SEMterface/blob/master/README.md).

- [SEMterface Github Mirror](https://github.com/bcomnes/SEMterface)
- [Blog Posts about the Project](/pages/tags/#SEMterface)
- [Photos From WebRTC Camp 2013](https://drive.google.com/folderview?id=0BwTZIu3XaN90SjM1TGJDNWphQnc&usp=sharing)

## Project Goals

The goal of this project is to enable remote viewing and operation of a Jeol-6300F Field Emitting Scanning Electron Microscope (SEM) to increase the utility of the microscope, increase access to rare/scarce equipment, and to allow more students the chance to train on industry standard equipment despite lacking physical access to it.

The only requirements for the remote user is that they have a [modern webRTC capable browser](http://iswebrtcreadyyet.com) and a capable internet connection.

## What libraries are being used?

- Express
- Socket.io
- [getUserMedia](https://github.com/HenrikJoreteg/getUserMedia)
- [SimpleWebRTC](http://simplewebrtc.com): Used for early prototypes.  We are currently moving to our own signaling server code.
- [node-serialport](https://github.com/voodootikigod/node-serialport)
- [Edge.js](https://github.com/tjanczuk/edge): A fair amount of  custom .net code exists for high resolution imaging with the Jeol.  This lets node access that data as it streams in.
- Arduino: A quick and dirty way to interface with stubborn microscope controls.


## Why Node/WebRTC etc?

Of the options that were being evaluated for the project, webRTC offered the easiest access to voice, video and data channels over the internet while maintaining easy to meet requirements for the remote user.  This also means that this project would take the form of a web application, which means the inevitable use of Javascript.  

Since most Physics students lack a background in web development, any future students getting involved would be required to learn some javascript.  Writing the server and hardware code in a second language such as .NET, Python or Ruby raises the barrier to contributing by requiring students to spend more time learning additional tools.  

Additionally, node is a good candidate for the project due to the availability of well documented modules such as socket.io which provide the necessary tools for webRTC signaling while sharing a common language between server and clientside code.  Node also offers strong module support for serial port communication and is able to work with existing .net programs that are used for high resolution imaging in the lab through the use of the edge.js library.  Node also has strong Windows support.  Node is also reported to work well for soft realtime web applications.