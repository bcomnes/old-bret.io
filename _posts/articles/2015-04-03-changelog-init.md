---
layout: article
published: true
title: "New Module: changelog-init"
date: 2015-04-03 08:58
syndicate:
  - url: https://twitter.com/bretolius/status/584071264932732929
    name: twitter
---

Released a new module to `npm` the other day while at the [civic studyhall](http://www.meetup.com/CodeForPortland/events/221479408/):

[`changelog-init`](https://www.npmjs.com/package/changelog-init) ([repo](https://github.com/bcomnes/changelog-init))

Its a super simple set of functions and CLI wrapper to initialize a [`keepachangelog.com`](http://keepachangelog.com/) changelog in the current directory.

Right now, its mainly a node-centric app, since it reads metadata out of `package.json`, but it will become more general with use.  The idea is that it can be used as a peice of the puzzle that is taking the work out of creating new modules quickly.

![Gif of changelog-init](https://cdn.rawgit.com/bcomnes/changelog-init/master/changelog-init.gif)
