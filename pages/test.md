---
layout: default
title: Test
asides: false
date: 2013-05-28 01:51:00
items:
- type: 'rsvp'
  status: 'maybe'
- type: 'flickr'
  p: '9150204250'
  user: 'bretc'
  title: 'A photo by someone'
  src: 'https://farm3.staticflickr.com/2888/9150206368_deeff8c675_z.jpg'
  w: '640'
  h: '478'
- type: 'reply'
  url: 'http://werd.io/comic/51e0a67dbed7de5277b4c530/indiecomix-indieweb'
  name: 'werd.io'
- type: 'like'
  url: 'http://www.sandeep.io/110'
  name: "What's sent is sent"
- type: 'youtube'
  v: 'i1Memjqppak'
  t: '1m45s'
- type: 'vimeo'
  v: '66352973'
- type: 'event'
  title: 'test event title'
  description: "We're going to eat burritos, talk about the IndieWeb, and catch up."
  location: 'Papalote Mexican Grill, 3409 24th Street, San Francisco, CA'
  time: '2013-06-28, 6pm'
  ends: '2013-06-28, 8pm'
- type: 'comic'
  alt: 'This is the comics alt-text'
  src: 'URL-TO-COMIC-SRC'
---

$Id$

{% assign i = 0  %}
This is a test page...

Here is the fist item:

{% include item %}

{% include item %}

{% include item %}

{% include item %}

{% include item %}

{% include item %}

{% include item %}

{% include item %}

Boop!
