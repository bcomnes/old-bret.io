---
layout: post
title: "Ruby on Windows"
date: 2013-06-26 22:59
in-reply-to-url: 
in-reply-to-title: 
tags: [Ruby, Website]
published: true
---
Here are my notes to get ruby up and running on windows in no time.  

###Steps to install ruby on windows.

1. Download the latest and greatest version of the [ruby installer](http://rubyinstaller.org/downloads/).
2. Install that somewhere, preferable out of `Program Files` to avoid any UAC bullshit.
	- Make sure to install to your path.  These modifications appear to be removed properly on uninstall, at least before the devkit is installed.
	- Ruby should now work from anything with a path, but I find git bash to be the most reliable environment for working with ruby.
3. Download the [Devkit](http://rubyinstaller.org/downloads/) and check out this [page](https://github.com/oneclick/rubyinstaller/wiki/Development-Kit) for more details.
4. Extract the devkit files somewhere.  I extract it to a folder called `devkit` inside my ruby folder.
5. Using git bash, navigate to the `devkit` directory and run `ruby dk.rb init` then run `ruby dk.rb install`.  This might modify your path more.  This also could mean the uninstaller may not be able to remove the modifications made during the install of just ruby.  This is unclear and needs more testing.
6. Now you can run `gem install bundle` and you are off to the races.

####I only use it for jekyll development.

This should result in a fully working ruby install in a few minutes time.	