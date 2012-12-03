Bret Comnes's Website
==================

This is my webpage.  It's being worked on.  I don't know HTML or CSS, so hopefully by the end of this I will know a little more.

### About the website ###

The goal here is to create a static website using tools that would make it easy to update.  I have decided on using Jekyll, for the site generation, and Twitter bootstrap for the HTML/CSS/Framework features.  

I chose Jekyll because of the free web-hosting offered by Github, and because it seemed to be well supported by a large community.  Twitter bootstrap also has a large community, and offers more than I would ever need in a website.  The large community is important because it typically there is a lot of discussion about how to use the tools.  As someone not knowing much of anything about making a website, this is important.

### Technology goals ###

I wanted the requirements to update the website to be simple.  Something like a text editor, and the transfer mechanism to the host.  I didn't want to rely on an additional 3rd party web-app, for example, to upload new pages or make edits.  Github pages will run a very basic Jekyll generation routine, so a text editor and a working instance of git is all you need to make minor edits.

Basically, I want to have the ability to update my site relatively painlessly from a shell account I am logging into the first time.  

### What about other meta-frameworks? ###

There are a lot of tools for doing something similar to what I have tried to do here.  There are also a lot of meta-tools that are supposed to help with setting up a site almost exactly as I am here (web frameworks + Jekyll), such as twitter bootstrap, and Octopress. While these tools do indeed get you a working website that looks good in a short amount of time, I didn't learn a whole lot, and found myself confused with what exactly the framework was doing, where I could insert my modifications without breaking things, where I would need to break things to get my customizations working.  Also, the communities around these frameworks are far smaller and typically have slow development times.  For someone like me who can't really contribute due to lack of experience/knowledge, I felt subjected to the decisions and schedule of the project developer in addition to not having much confidence in the longevity of the project.  Plus I realized I was just hoping someone else was going to do the work I could be learning from.

#### My foray into Octopress ####

After settling on Octopress, I realized that I wasn't even meeting my goals I set out meet originally.  Octopress turned out to be a pile of other tools, Jekyll being one of them, to statically generate a site locally, and then upload the generated html to a gh-pages branch.  It also turned out to be a pain to get set up on new computer.  It *needed* ruby, rbenv, a whole pile of gems, git etc.  While its a cool SSG, with lots of features, it seemed kind of like it was missing the point of doing a static web-page in the first place.  Also, I think there are some more sophisticated SSGs out there which replicate a lot of the things Octopress does.  This basically eliminated windows as a platform that I could use to update my site, with the exception of ones I owned and could put-forth the effort to get a working ruby environment. 

I really liked their logo though! The default style looks good too!

### Current Tools ###

What decided on doing is to use Vanilla Jekyll (IE what github lets you use) and to use Twitter bootstrap as the site layout framework.  I looked for someone who had already wired this up, but found nothing compelling, so I decided to give a go at it.  


#### Maybe one day ####

Maybe one day, once I get my site to where I like it, will separate the Jekyll and Bootstrap ingredients into its own repo so people can re-use a basic Jekyll blog that is pre-wired to Twitter Bootstrap. 

Also, a set of aliases (or something) to speed up the post creation process would be nice.  

### A little about me ###

I graduated in 2011 with a B.S. in Physics from Humboldt State University where I helped study gravity. I currently live in Portland, OR where I am working on my PhD in Physics at Portland State University.

This is a website that I would *like* to post the results of my projects and experiments, as well as random thoughts, but I still need to figure all that out.