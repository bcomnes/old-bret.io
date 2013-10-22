---
layout: article
published: true
title: OSFw3c Report Errata
date: "2013-10-22 15:16"
tags: 
  - IndieWebCamp
  - OSFw3C
---

> Hi [Harry](http://www.ibiblio.org/hhalpin/),
> 
>
> Thanks for putting up the report of the OSFW3C recently:
http://www.w3.org/2013/socialweb/report.html
>
>
> I wanted to point out some mistakes form the running code section.
>
>
> I demonstrated my [personal blogging platform](https://github.com/bcomnes/bcomnes.github.io) which is built off of [jekyll](http://jekyllrb.com/) and hosted for free on github-pages (under my own domain).  I demonstrated the ability to post comments to my own site, and have the contents of the comment (or rsvp status to an event) automatically syndicated and displayed to other '[indieweb](http://indiewebcamp.com)' enabled websites using a combination of [webmentions](https://webmention.org/) and [microformat-2](http://microformats.org/wiki/microformats-2) symantic data.  The result of this is displayed as a twitter-like conversation thread made up of posts from across different personal websites.  My particular implementation is done using completely static html and post commit hooks, which helps demonstrate the simplicity and viability of these different tools.  The other sites involved in the demo were http://aaronparecki.com and http://werd.io which are separate implementations of the above standards than my own.
> 
> Aaron Parecki demonstrated [indieauth](https://indieauth.com/), an implementation of [rel=me auth](http://microformats.org/wiki/RelMeAuth), a standard that enables domain names as an identity (rather than email as an identity), by delegating your authentication provider to existing accounts on services that support Oauth (such as twitter, github, flickr, etc).  It also allows for alternate authentication methods such as TOTP (google authenticator) and SMS authentication.    As part of his presentation, Aaron demonstrated passwordless TOTP authentication via indiauth where his [pebble watch provided him with TOTP code](http://aaronparecki.com/articles/2013/07/15/1/password-less-logins-from-your-own-domain-with-a-pebble-watch).
>
> 
> Can we update the two descriptions for histories sake?  It was a great meeting.  I learned a lot!
> 
> ~ Bret Comnes