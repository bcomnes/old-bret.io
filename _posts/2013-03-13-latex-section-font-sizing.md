---
layout: post
title: "LaTeX Section Font Sizing in TextMate 2"
date: 2013-03-13 21:12
comments: false
external-url: 
tags: [LaTeX, TextMate, Programming, Markup]
published: true
---

Like how TextMate 2 resizes the font of your header levels while editing your markdown files?  Do you also wish that, similarly, your LaTeX sections had a different font size to help visually distinguish them from the wall of markup surrounding them?  Well due to [some discussion over at stack exchange](http://tex.stackexchange.com/questions/98574/textmate-2-how-can-increase-font-size-of-sections-in-the-markup-code), and a little encouraging in [#textmate](irc://chat.us.freenode.net:+7000/#textmate) to help [expand the scope selectors](https://github.com/textmate/latex.tmbundle/commit/65eaf2b8efbf466e9075c9f947a25a124b53f3f7) in the LaTeX.tmbundle, I now present the [LaTeX-Section-Font-Sizes.tmbundle](https://github.com/bcomnes/LaTeX-Section-Font-Sizes.tmbundle).

![screenshot of bundle effects](https://raw.github.com/bcomnes/LaTeX-Section-Font-Sizes.tmbundle/master/screenshot.png)

To install, just navigate to ~/Library/Application\ Support/Avian/Bundles/ and perform a `git clone https://github.com/bcomnes/LaTeX-Section-Font-Sizes.tmbundle.git` and you should be good to go.  You can also download a [.zip or tar.gz](https://github.com/bcomnes/LaTeX-Section-Font-Sizes.tmbundle/tags) if you prefer to avoid git.

Right now it changes the font and size of the section, subsection, and subsubsections in the LaTeX bundle.  The bundle will get updates as needed but suggestions are always appreciated.  Have have a look around in the bundle editor once it is installed to see how this was achieved.  It is really simple and it would be neat to see how others could expand upon it.
