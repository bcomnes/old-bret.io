---
layout: post
title: "Setting up Keepass as pageant"
date: 2013-01-22 00:44
external-url: 
categories: 
tags: [Tutorial, Keepass, pageant, SSH, *nix]
published: false
---
To start using Keepass as a replacement for pageant you must do the following.

1.	Download [Keepass](http://keepass.info/download.html)
2.	Download [Keeagent](http://keepass.info/plugins.html#keeagent)
3.	Install Keeagent to the `\KeePass Password Safe 2\Plugins` Directory

Thats it!  Now Keepass is ready to act as `pageant`!  Now comes the real work.  You still have to:

-	Generate and import your keys to Keepass, and make sure they work.
-	Set up some enviroment variables so that Open-SSH uses `plink` instead of `ssh` so that `pageant` is used rather than `ssh-agent`.
	-	This requires some understanding of the '$PATH'
	-	This also requires adding `plink` to your windows `$PATH`
	-	You must also add `$GIT_SSH` and set it to 'pink'
-	Install `charade` as a bridge from Cygwin to `pageant`.
-	Tweak sparkleshare to use the system's $GIT_SSH variable instead of its built in version of `ssh`.