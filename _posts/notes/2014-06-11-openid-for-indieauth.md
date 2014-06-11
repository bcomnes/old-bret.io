---
layout: note
published: false
title: OpenID For IndieAuth
reply_url: "http://cweiske.de/tagebuch/indieauth-openid.htm"
reply_title: cweiske.de
tags: 
  - IndieAuth
  - IndieWeb
  - openid
date: "2014-06-11 15:54"
---

Congrats to [cweiske](http://cweiske.de/) for implementing [IndieAuth-openID proxy]()!

What struck me was the comparisons at the top of the post however:

<blockquite>
- [IndieAuth](http://indiewebcamp.com/IndieAuth) instead of [OpenID](http://openid.net/)
- Microformats instead of [Libravatar](https://www.libravatar.org/) for avatar images
- [h-feed](http://indiewebcamp.com/h-feed) instead of [Atom feeds](http://tools.ietf.org/html/rfc4287)
- [Microformats](http://indiewebcamp.com/link-preview) instead of [oEmbed](http://www.oembed.com/)
</blockquite>

We can rearrange this comparison a bit for a slightly different perspective:

- [Microformats](http://microformats.org/wiki/RelMeAuth) (rel=me auth) instead of [OpenID](http://openid.net/)
- [Microformats](http://microformats.org/wiki/h-card) (h-card) instead of [Libravatar](https://www.libravatar.org/) (DNS Extensions)
- [Microformats](http://microformats.org/wiki/h-entry) (h-entry) instead of [Atom feeds](http://tools.ietf.org/html/rfc4287) (or RSS, both relying on alt, DRY violating and hidden XML data)
- [Microformats](http://microformats.org/wiki/microformats2) instead of [oEmbed](http://www.oembed.com/) (Requires Application level API support)

What used to be a disjoint stack of standards all acting with different tools in different locations with higher barriers to publishing can now be accounted for with simple HTML class/rel attributes.  Simply reinvention, or a simplifying iteration?  I'll go with the later.
