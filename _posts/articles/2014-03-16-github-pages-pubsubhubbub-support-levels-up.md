---
layout: article
published: true
title: Github Pages PubSubHubbub Support Levels Up
date: "2014-03-16 13:30"
tags: 
  - Jekyll
  - "gh-pages"
---

### This post served as a test for the following instructions.  They are currently not working and I am seeking a fix

A pleasing detail was noticed today.  A while back, Github [updated repository webhooks](https://github.com/blog/1778-webhooks-level-up) with a ton more options, events and granularity.  This update didn't initially include page build events, but now it appears that it does.  This is great news because it means that it is way easier to enable [pubsubhubbub]()(PuSH) on a [Github pages]() built blog.

## How to enable PubSubHubbub support on Github Pages as of now:

1. Disable any other webhook events related to PuSH that you used to use for your site.
3. Make sure you add the appropriate headers to your feed required by PuSH.
	- `<link href="https://push.superfeedr.com" rel="hub"/>`
	- `<link href="http://{{ site.url }}/atom.xml" rel="self"/>`
    - You can check my feed as a reference: [atom.xml](/atom.xml)
2. Add a new webhook in your repository settings on Github.  
	- I used `https://push.superfeedr.com/publish?hub.mode=publish&hub.url=http://bret.io/atom.xml`
    - Switch out the URL of my atom file for yours.
    - There is also a google run example hub that is open for general use: `http://pubsubhubbub.appspot.com`
3. Select `Let me select individual events` and only check `Page build - Pages site built.`

Previously, one had to add a delay between the repository push event and the webhook, as was discovered through the discussion over at [ivanzuzak.info](http://ivanzuzak.info/2011/01/02/enabling-pubsubhubbub-for-github-hosted-blogs.html).

