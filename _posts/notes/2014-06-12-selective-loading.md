---
layout: note
published: false
title: Selective loading
reply_url: "http://waterpigs.co.uk/notes/4WZHhH/"
reply_title: "http://waterpigs.co.uk"
date: "2014-06-12 10:56"
tags: 
  - js
---

so say you want all textareas with class=“codemirror” to have codemirror applied to them, but not to load codemirror at all on pages without said textareas
you call enhanceEach(‘textarea.codemirror’, [‘path/to/codemirror’ (requirejs dependency list)], callback)
 and if there are any elements matching the selector, the libraries are loaded, and callback(element, *dependencies) is called for each element
 it’s a pattern I use everywhere in Taproot and Shrewdness, and got tired of writing it out explicitly :)