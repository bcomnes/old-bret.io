---
layout: post
title: "Homebrews doctor fun"
date: 2012-06-22 13:49
comments: false
sidebar: collapse
tags: [Website, Programming, Linux, OS X, Homebrew]
published: false
---
[Homebrew](http://mxcl.github.com/homebrew/) (or `brew`) is an awesome and lightweight tool for installing *nix and CLI tools on OS X, and is simple enough for people who are unfamiliar with the inner working of their mac.  

I like it because it respects to the [OS X Human Interface Guidelines](http://developer.apple.com/library/mac/#documentation/UserExperience/Conceptual/AppleHIGuidelines/Intro/Intro.html) better than [MacPorts](http://www.macports.org/) and wont litter your user folder with files that don't belong there.  It's also rather new and has a lot of momentum behind it from its active community.  There are some downsides, so I hear, but for someone who is new to CLI programs and the underlying BSD architecture of OS X, its perfect.  Its unix programs for people who use OS X, not OS X for people who use linux, it that makes any sense.

A really common problem that pops up with with initial Homebrew installs is that the users PATH environment variable is not set up to use Homebrew's programs before the default versions that ship with OS X.  Running `brew doctor` will result in the following error if this is the case:

`code`
Error: /usr/bin occurs before /usr/local/bin
This means that system-provided programs will be used instead of those
provided by Homebrew. The following tools exist at both paths:

    mate
    sqlite3
    svn
    svnadmin
    svndumpfilter
    svnlook
    svnserve
    svnsync
    svnversion

Consider amending your PATH so that /usr/local/bin
is ahead of /usr/bin in your PATH.
`code`

Unfortunately, it assumes you know how to fix this situation and offers no solution other than the high level instruction of chaining your PATH.  If you don't know what environment variables are, how to change them, or even how terminal sessions work, this isn't a trivial fix.  

### The quick fix ###

A quick fix to the above `brew` is to add a few lines to a small file called `.bash_profile`.  Follow these steps:


1.	Open a terminal session.
2.	Make sure you are in your home directory by entering the command `cd ~` or `pwd` to confirm that you are.
3.	Create or edit a file called `.bash_profile`.  If it already exists, you may have made some terminal tweaks already, in which case, you should look to see of something similar has already been done.  To do this enter the command `nano .bash_profile`.  As you probably know, files that start with `.` are hidden.
4.	Paste the following lines into the editor.
codeblock 	.bash_profile lang:sh
echo $TERM
endcodeblock


### A longer description ###
`PATH`? Environment Variables? `.bash_profile`? Since `brew` can install redundant versions of the (outdated) software that Apple includes, we need to tell our terminal which programs have priority.  The programs included in OS X are stored in a different location than the ones `brew` installs.  Your `PATH` is and environment variable exactly what the name vaguely implies.  It is a variable that varies from user to use that has the path 