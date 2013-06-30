---
layout: article
title: "Getting Started with Bower"
date: 2013-06-29 14:26
in-reply-to-url: 
in-reply-to-title: 
tags: [Ruby, Website, Documentation]
published: true
---
Here are some notes how to set up [Bower](), a package manager for project dependancies.

1. Set up [node.js]()/[npm]() on the local system that will be running Bower.
    - (*Optional*) Set up a `.bowerrc` file in the project directory if you have weird project requirements.  See the bower documentation for a loose idea of what this can do.
2. Run `bower init` in the root directory of your project.
3. Fill in that information.
4. Install packages that you think you need.
5. When you want to define packages that your project depends upon, use the `--save flag`.
    - IE: `bower install --save bootstrap`
    
It is unclear how this fits in with a git workflow.  Do you download the packages as development dependency then process them into another folder and commit that?