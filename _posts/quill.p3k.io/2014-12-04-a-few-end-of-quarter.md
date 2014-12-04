---
h: entry
date: "2014-12-04T02:17:00+00:00"
tags: null
location: null
place-name: null
in-reply-to: null
syndicate-to: null
client_id: "https://quill.p3k.io"
client: quill.p3k.io
scope: post
files: null
published: true
syndicate: null
---

** few end of quarter projects:**

A quick brain dump of project progress recently.  Please forgive the grammar and spelling errors.

### [Tempy](https://github.com/bcomnes/tempy)

This will add a live temperature sparkline of the apartment to the web.  Temp data is coming from the [Nest API]() using a display provided by one of the following libs:

- [Sparky](http://prag.ma/code/sparky/)
- [sparkline.js](https://www.npmjs.org/package/sparkline)

### Youtube-dl wrapper

This will easily spiral into a much larger project, but the idea is to make a small web wrapper around [youtube-dl](https://developer.nest.com), which take video URLs, downloads them, converts them to an mp3 (via ffmpeg), then serves them up as a podcast feed.  Obviously, this will be for personal use only, but it seems like the easiest way to cache a long conference talk or lecture for offline use on a phone.

**Longer term project progress:**

### [SEMterface](https://github.com/SEMterface/semterface)

Totally missed the schedule on this.  Looks like I will have to dump another quarter into this project.  I have a ton more knowledge about how to make this project work now, so its a matter of finding time to do it and make enough progress early so that I am not forced to deviate to a much less interesting outcome.

### [base](https://github.com/bcomnes/base)

Created  a fresh new base site for a gh-pages hosted jekyll site.  This has good initial progress made on it and a basic structure including dynamic javascript loading through require.js.  Nest up is working on the CSS and flex box layout, which appears to be the next big hurdle.

### [gitpub](https://github.com/bcomnes/gitpub)

Recent Progress:

- Switched from [mocha](https://github.com/mochajs/mocha) to [tape](https://github.com/substack/tape).
- Syndication advertising in.
- More tests... but apparently they suck because they are mocks.

Recent regression:

- Posts error out.. but they still work
- Lots of logic in routes.  Bad!
- Realizations of a Monolithic structure

Plans:

- Rewrite the git wrapper
- Get syndication working
- Make more generic/app like?
- But also reduce scope to a single website.

