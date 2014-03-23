---
layout: article
published: true
title: IWC IRC Logs
date: "2014-03-23 13:15"
items:
- type: 'flickr'
  p: '13361683735'
  user: 'bretc'
  title: 'Screenshot of the feed'
  src: 'http://farm4.staticflickr.com/3834/13361683735_62ca09ea53_z.jpg'
  w: '427'
  h: '640'
---
{% assign i = 0  %}
{% include item %}
After a few days of hammering on Express, the [IndieWebCamp IRC Log Atom feed](http://iwc-log-feed.herokuapp.com) is live and working.  It grabs all of µF2 data from the logs and reformats it into an atom feed.  Source is on [Github](https://github.com/bcomnes/iwc-log-feed).  It makes it easy to subscribe to the last full days log file.  

Working with the [microformat-node](https://github.com/glennjones/microformat-node) library was a breeze.  [Glenn Jones](http://glennjones.net) did a really great job!  Similar to [pin13.net](http://pin13.net), there is a hosted version of the parser: [glennjones.net/tools/microformats](http://glennjones.net/tools/microformats) 

- [moment.js](http://momentjs.com) makes working with time super easy.
- While it would be nice to eventually render the Atom feed entirely in XML/XHTML, the easiest thing was to [generate the html of the feed content separately](http://iwc-log-feed.herokuapp.com/htmltest), and then xml escape it.  [xml-escape](https://www.npmjs.org/package/xml-escape) worked great for this.
- [sanitize-html](https://www.npmjs.org/package/sanitize-html) was a nice find and is easy to use.  Unfortunately, the issue here isn't sketchy HTML tags.  
- Invisible unicode characters keep creeping into the logs, so [filters were written](https://github.com/bcomnes/iwc-log-feed/blob/master/lib/logs.js#L27) to specifically target troubling characters.  A good regex project would be to write a module that removes XML unfriendly characters from a string.
- [node-schedule](https://github.com/mattpat/node-schedule) allowed for lazy feed update scheduling.  Ultimately, I want to enable push and deploy to a server that does not sleep.  Right now feed polling keeps the heroku app alive.
- The [Atom Syndication](http://atomenabled.org/developers/syndication/) page is what you want to look at when building a feed.  The example they give is weak, but the rest of the document is clear.	

The obvious direction to head in is a generalized [h-entry](http://microformats.org/wiki/h-entry)/[h-feed](http://microformats.org/wiki/h-feed) to Atom/RSS gateway.  It wouldn't be that much more work beyond what has already been done here.  It would also make h-feed publishing more practical and useful, as it would allow consumption in the existing readers that we have today.  