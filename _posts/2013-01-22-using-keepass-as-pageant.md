---
layout: article
title: "Using KeePass as pageant"
date: 2013-01-22 00:44
external-url: 
categories: 
tags: [Tutorial, Keepass, pageant, SSH, Windows, Git, CLI, Documentation]
published: true
---
To start using Keepass as a replacement for `pageant` you must do the following.

1.	Download [KeePass](http://keepass.info/download.html)
2.	Download [KeeAgent](http://keepass.info/plugins.html#keeagent)
3.  Set up Keepass by creating a KeePass database, a password, and key file, if you don't already have one.
4.	Install Keeagent to the `Program Files\KeePass Password Safe 2\Plugins` Directory and restart Keepass.
5.  Add an existing private.ppk as an attachment and its encryption password in the password field to a new Keepass Entry.  I also like to include the public key as a string field attachment.  
6.  Test it out by going to `Tools -> KeeAgent -> List PuTTY Keys`

Thats it!  Now Keepass is ready to act as `pageant`!  Now comes the real work.  You still have to:

-	Set up some environment variables so that Open-SSH uses `plink` instead of `ssh` so that `pageant` is used rather than `ssh-agent`.
	-	This requires some understanding of the `$PATH`
	-	This also requires adding `plink` to your windows `$PATH`
	-	You must also add `$GIT_SSH` and set it to 'pink'
-	Install `charade` as a bridge from Cygwin to `pageant`.
-	Tweak Sparkleshare to use the system's `$GIT_SSH` variable instead of its built in version of `ssh`.

I'll be going over these different steps, as well as why you might want to take the time to do this kind of thing in subsequent posts.  And always, if you know a better way of doing things, or I am making silly or dangerous mistakes, please [email me](/about).