---
layout: article
published: false
title: IWC IRC Logs
date: "2014-03-23 13:03"
---

After a few days of hammering on Express, the [IndieWebCamp IRC Log Atom feed]() is live and working.  It grabs all of µF2 data from the logs, and reformats it into an atom feed.  

Working with the [microformat-node](https://github.com/glennjones/microformat-node) library was a breeze.  [Glenn Jones]() did a really great job!  Similar to [pin13.net](), there is a hosted version of the parser: [glennjones.net/tools/microformats](http://glennjones.net/tools/microformats) 

- [moment.js]() makes working with time super easy.
- While it would be nice to eventually render the Atom feed entirely in XML/XHTML, the easiest thing was to [generate the html of the feed content separately](), and then xml escape it.  [xml-escape]() worked great for this.
- [sanitize-html]() was a nice find and is easy to use.  Unfortunately, the issue here isnt sketchy HTML tags.  
- Invisible unicode characters keep creeping into the logs, so [filters were written]() to specifically target troubling characters.  A good regex project would be to write a module that removes XML unfriendly characters from a string.
- [node-schedule]() allowed for lazy feed update scheduling.  
- The [Atom Syndication](http://atomenabled.org/developers/syndication/) page is what you want to look at when building a feed.  The example they give is pretty weak, but the rest of the document is pretty clear.	

The obvious direction to head in is a generalized [h-entry]()/[h-feed]() to Atom/RSS gateway.  It wouldn't be that much more work beyond what has alredy been done here.  It would also make h-feed publishing more practical and useful, as it would allow consumption in the existing readers that we have today.  