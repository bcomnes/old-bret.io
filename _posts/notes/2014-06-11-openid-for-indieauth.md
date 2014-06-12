---
layout: note
published: true
title: OpenID For IndieAuth
reply_url: "http://cweiske.de/tagebuch/indieauth-openid.htm"
reply_title: cweiske.de
tags: 
  - IndieAuth
  - IndieWeb
  - openid
date: "2014-06-11 15:54"
---

Congrats to [cweiske](http://cweiske.de/) for implementing [IndieAuth-openID proxy](http://git.cweiske.de/indieauth-openid.git/)!

What struck me was the comparisons at the top of the post however:

<blockquote>
The IndieWeb movement is much about "code before talk", and on this way wheels are reinvented: 
<small><cite href="http://cweiske.de/tagebuch/indieauth-openid.htm">cweiske.de</cite></small>
</blockquote>

- [IndieAuth](http://indiewebcamp.com/IndieAuth) instead of [OpenID](http://openid.net/)
- Microformats instead of [Libravatar](https://www.libravatar.org/) for avatar images
- [h-feed](http://indiewebcamp.com/h-feed) instead of [Atom feeds](http://tools.ietf.org/html/rfc4287)
- [Microformats](http://indiewebcamp.com/link-preview) instead of [oEmbed](http://www.oembed.com/)


We can rearrange this comparison a bit for a slightly different perspective:

- [Microformats](http://microformats.org/wiki/RelMeAuth) (rel=me auth) instead of [OpenID](http://openid.net/)
- [Microformats](http://microformats.org/wiki/h-card) (h-card) instead of [Libravatar](https://www.libravatar.org/) (DNS Extensions)
- [Microformats](http://microformats.org/wiki/h-entry) (h-entry) instead of [Atom feeds](http://tools.ietf.org/html/rfc4287) (or RSS, both relying on alt, DRY violating and hidden XML data)
- [Microformats](http://microformats.org/wiki/microformats2) instead of [oEmbed](http://www.oembed.com/) (Requires Application level API support)
- [Webmention](http://webmention.org) (HTTP) instead of [Pingback](http://www.hixie.ch/specs/pingback/pingback) (XMLRPC)
- [MicroPub](http://indiewebcamp.com/micropub) (HTTP + µF Vocab) instead of [AtomPub](http://bitworking.org/projects/atom/rfc5023.html) (XMLRPC + Atom Vocab)

What used to be a disjoint stack of standards all acting with different tools in different locations in different languages and vocab with higher barriers to publishing can can now be handled using a simplified and singular set of standards based around HTML and HTTP.  Simply reinvention, or a simplifying iteration?  I'll go with the later.

<blockquote>
"you're replacing a square, triangular and pentagonal wheel with a set of round ones"
<small><cite href="http://indiewebcamp.com/irc/2014-06-11/line/1402530932">Kevin Marks</cite></small>
</blockquote>