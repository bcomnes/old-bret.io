---
layout: default
title: SEMterface
---

# SEMterface

This is the description page for the SEMterface project at the [Erik Sanchez Nanodevelopment Lab](http://web.pdx.edu/~esanchez/sanchezTeam.html) at Portland State University.  Technical details and code can be found in the repository README.

- [SEMterface Github Mirror](https://github.com/bcomnes/SEMterface)
- [Blog Posts about the Project](/pages/tags/#SEMterface)

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

Since most Physics students lack a background in web development, any future students getting involved would be required to learn some javascript.  Writing the server and hardware code in a second language such as Python or Ruby would require students to spend more time learning additional tools and raise the barrier to contributing.

Additionally, node is a good candidate for webRTC signaling due to well documented modules such as socket.io as well as webRTC specific libraries.  It also offers strong support for serial port communication and is able to work with existing .net programs that are used for high resolution imaging in the lab through the use of the edge.js library.  Node has strong Windows support.