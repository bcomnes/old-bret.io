---
layout: article
published: true
title: "New Sublime Package: Standard Format"
date: 2015-04-03 09:17
---

Managed to kick out a new Sublime Text 3 package yesterday.... but we are still waiting on getting it into the [Package Control channel](https://github.com/bcomnes/sublime-standard-format/issues/3) :(

- [`sublime-standard-format`](https://github.com/bcomnes/sublime-standard-format) (repo)

This plugin auto-formats javascript files that you have open using `standard-format`, and uses the globally installed `standard-format` rather than bundling it inside the editor pacakge.  It pairs nicely with the [`standard` linter](https://github.com/Flet/SublimeLinter-contrib-standard).

Thanks for all the help from [@flet](https://github.com/Flet), it even includes selection formatting (but that still needs a bit of work).

![Format animation](https://cdn.rawgit.com/bcomnes/sublime-standard-format/master/format.gif)
