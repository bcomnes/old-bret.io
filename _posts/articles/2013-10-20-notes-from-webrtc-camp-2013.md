---
layout: article
published: true
title: Notes from WebRTC Camp 2013
date: "2013-10-20 14:24"
tags: 
  - webRTC
---

The following are notes from the QA session with Google's [Ilya Grigorik](http://www.igvita.com/) and Mozilla's [Eric Rescorla](http://rtfm.com/) at [webRTC Camp 2013](http://2013.webrtccamp.com/).  They may or may not be interesting to anyone.

- [Hackpad with notes and schedule](https://hackpad.com/WebRTC-Camp-2013-ViBwUIBkDGh)
- [#webrtcamp on freenode](irc://chat.us.freenode.net/webrtcamp)
- Why [SDP](http://en.wikipedia.org/wiki/Session_Description_Protocol)?  
    - WebRTC has deepish roots with Jingle (it sounds?)
    - SDP originate with [MBone](http://en.wikipedia.org/wiki/Mbone)
- The WebRTC stack only uses the VP8 video codec right now, however it sounds like there is a lack of hardware support for VP8, however Google is working on getting those in production.  It is unknown what Apple will do, and Microsoft has their own competing protocol.  
- Screen sharing has all sorts of security issues, namely, once you can see someone else's screen, you can pull sensitive information off of their screen, such as auth tokens etc.
- It is possible to implement whatever you want over data channel, including your own voice and video tools.  This is a huge project, "orders of magnitude" larger than a standard web application.
- It isn't implemented yet, but you 'will' be able to create media streams from a canvas source, and use that as a video source.
- [Socket.io]() in danger of dying?  Abstract! abstract!  Here comes [primus](https://github.com/primus/primus) which wraps all of the popular realtime libraries.  I'll probably hold out for the abstraction on top of priums ;)   