---
layout: article
title: "Website Instruction Manual Pt. 1"
date: 2012-12-25 23:14
external-url: 
categories: 
tags: [Website, Education, Tutorial, Story, Jekyll, Homebrew, CLI, NV]
---

# Now what?
The website is basically wired up.  Jekyll and bootstrap are talking, and I have the basic layout that I had with Octopress.  Before I do anything else, I want to record my educational path to get to this point.  Hopefully one day I will find a way to make this site about other things than itself. 

# In the beginning

When I decided to make a website, after deleting my facebook and twitter accounts in the end of 2011, I hadn't a clue where to start.  Due to some nasty experiences with some Apache server and MySQL Database dependent web-apps I royally screwed up on accident, and because I originally though I would be hosting the site off of an Arduino (silly, I see this now), and after seeing all those [schmancy ruby gem websites](https://pinboard.in/u:bcomnes/t:ruby/), I decided a <abbr title="static site generator">SSG</abbr> was what I needed.  


## An SSG you say? 

Yes, an SSG.  But SSGs are complex and scary and require the <abbr title="Command Line Interface">CLI</abbr> and things like dependancies.  At first, I was really confused.  [Here are some notes](https://gist.github.com/4378960) I found (thanks to [Simplenote](https://simple-note.appspot.com/) and [Notational Velocity](http://notational.net/)) from almost a year ago when I started all of this!  What was I thinking!?


### First comes the CLI

Yes, the CLI.  Everything beyond here depends upon this.  Git is awesome, and has awesome GUI interfaces for it, but its unique like that.  Most every other CLI tool has much lower quality GUI helpers, if any at all.  To learn this, you must learn to use the CLI well enough so that it isn't getting in the way at every turn.

#### But how do I ease the pain?

Easy.  You pick a motivation to learn it.  

A friend offered me offered access to an [`irrsi`](http://www.irssi.org/) IRC shell.  I have been told [`irrsi`](http://www.irssi.org/) was the bee's knees, and wanted to learn.  It was a social and fun experience setting it up and talking to others who advocated it.  I was also taking the opportunity with the shell, to use another CLI program called [`taskwarrior`](http://taskwarrior.org/projects/show/taskwarrior), literally the best todo list manager you can find.  

Oh, and in order to do this you need to learn GNU Screen.  But what happens when the lousy VPN kept crashing?  Well, thats what your CRON is for.  And man, passwords suck, can I figure out a better way?  Why yes!  Public, private key encryption!  And what if I don't want to type in a private key password every time?  Why then you need ssh-agent (or pageant). Colors, prompts, user-space installations, compiling.  Going local with [`homebrew`](http://mxcl.github.com/homebrew/), and [`znc`](http://wiki.znc.in/ZNC).  Everything led the next logical step in learning about the terminal.  

Find a motivation, a tool that offers you value, learn it.  Things will start falling into place eventually.  This really deserves its own post.

### Then comes git

I already kind of knew how to to use Git at this point.  But yes, you need to know how to use git.  Ease the pain with a good GUI.  [TortoiseGit](http://code.google.com/p/tortoisegit/) on Windows, [GitX-dev](http://rowanj.github.com/gitx/) for mac (or [Gitx brotherbard](http://brotherbard.com/blog/2010/03/experimental-gitx-fork/) if you are 32-Bit like me), and [Gitg](https://github.com/jessevdk/gitg) on linux are my favorite.

### Which SSG do I use?

I initially found lots

*   [Jekyll](http://jekyllrb.com/) - Ruby
*   [Hyde](http://ringce.com/hyde) - Python
*   [Nanoc](http://nanoc.stoneship.org/)
*   [Bonsai](http://tinytree.info/)
*   [Others](https://pinboard.in/search/?query=SSG&mine=Search+Mine)

I started off, originally with [Bonsai](http://tinytree.info/), but found the aesthetic it tried to convey carried into how it worked and was confusing.  The documentation was also pretty bad, and I am pretty sure that they had updated the templating engine, and not the instructions.  I see this now, but at the time, I was not able to get anywhere.


[Jekyll](https://github.com/mojombo/jekyll) seemed to be the most popular, but thats because Github will build a Jekyll site for you if you follow their rules.  

I chose [Jekyll](https://github.com/mojombo/jekyll).  I played around with it, but then I got side tracked by some real distractions.

# How much longer before the website?

Its true.  At this point, as far as I had gotten was learning about the tools I thought I might need to build the website.  No HTML, no CSS, just CLI tools and web frameworks.  I didn't anticipate having to learn so much about Unix style tools just to build a website using an SSG, but it has been well worth it.  Maybe I should have just submitted to a service like [statamic](http://statamic.com/) and avoided all the hassle.  

More to come in part 2. 