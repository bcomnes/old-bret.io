---
layout: article
published: true
title: Github Pages PubSubHubbub Support Levels Up
date: "2014-03-16 13:30"
tags: 
  - Jekyll
  - "gh-pages"
---

A pleasing detail was noticed today.  A while back, Github [updated repository webhooks](https://github.com/blog/1778-webhooks-level-up) with a ton more options, events and granularity.  This update didn't initially include page build events, but now it appears that it does.  This is great news because it means that it is way easier to enable [pubsubhubbub](http://code.google.com/p/pubsubhubbub/)(PuSH) on a [Github pages](https://help.github.com/pages/‎) built blog.

## How to enable PubSubHubbub support on Github Pages as of now:

1. Disable any other webhook events that you used to use for your site.
3. Make sure you add your hub URL into your feed.
	- IE: `<link href="https://pubsubhubbub.superfeedr.com" rel="hub"/>`
    - You can check my feed as a reference: [atom.xml](/atom.xml)
2. Add a new webhook in your repository settings on Github.  
	- I used `https://pubsubhubbub.superfeedr.com/publish?hub.mode=publish&hub.url=http://bret.io/atom.xml`
    - Switch out the URL of my atom file for yours.
    - There is also a google run example hub that is open for general use: `http://pubsubhubbub.appspot.com`
3. Select `Let me select individual events` and only check `Page build - Pages site built.`

Next task is to play around with the [repository metadata](https://github.com/blog/1797-repository-metadata-and-plugin-support-for-github-pages) that was recently made available to Jekyll blogs.  Hopefully this is a Jekyll thing rather than just a Github feature?  

Previously, one had to add a delay between the repository push event and the webhook, as was discovered through the discussion over at [ivanzuzak.info](http://ivanzuzak.info/2011/01/02/enabling-pubsubhubbub-for-github-hosted-blogs.html).

