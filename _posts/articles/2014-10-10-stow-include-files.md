---
layout: article
published: false
title: Stow Include Files
date: "2014-10-10 17:3"
---

It isn't uncommon to come across unix software that does not conform to the standard unix directory organizational structure:


{% highlight sh %}
/bin
/include
/lib
/lib64
/local
/sbin
/share
/tmp
{% end highlight %}

When you are using a system like stow, this non-conformity can be a real pain in the neck since it tends to create a mess in `/usr/local`, your home directory, wherever you are stowing too.


http://perldoc.perl.org/perlretut.html#Grouping-things-and-hierarchical-matching
http://bret.io/2014/08/25/managing-programs-in-unix-userland/
http://regjex.com
http://stackoverflow.com/questions/406230/regular-expression-to-match-string-not-containing-a-word
http://www.gnu.org/software/stow/manual/stow.html#Ignore-Lists
http://arc-docs.readthedocs.org/en/latest/linux-clusters.html


 ^((?!(\/)bin|include|lib|lib64|local|sbin|share|tmp).)*$

/^((?!(\/)bin|include|lib|lib64|local|sbin|share|tmp).)*$/
