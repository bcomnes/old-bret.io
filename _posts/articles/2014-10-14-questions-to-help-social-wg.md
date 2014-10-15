---
layout: article
published: true
title: Questions to Help the W3C SocialWG
date: "2014-10-14 11:27"
updated: "2014-10-14 17:34"
tags:
  - mf
  - jsonld
  - as
  - activitystreams
  - w3c
---

Trying to follow the narrative at the W3C [Social Web Working Group](https://www.w3.org/wiki/Socialwg) has been challenging, and the initial AS2.0 drafts seem significantly different than the existing AS1.0 implementations.  Already, there is also an extremely confusing overlap between [JSON-LD](http://json-ld.org/)/[LDP](http://www.w3.org/2012/ldp/wiki/Main_Page)/[RDF](http://www.w3.org/RDF/), [schema.org](http://schema.org/) vocabulary and other various semantic web technologies.  This post will be updated as information comes in.

**Goals for these questions:**  What did AS1.0 do well and not so well, what needs to happen to in order help make AS2.0 a viable evolution that meets the charter goals, and what are the existing overlaps between AS1.0 and other similar standards and what are the proposed overlaps in AS2.0 (i.e. JSON-LD).

## What are primary examples of software that consumes and publishes Activity Streams?

- **[pump.io](https://pump.io)**,[Status.net/Identica](http://status.net/) - [Evan Prodromou](https://e14n.com/evan):

  Co-chair of the WG.  Figure out the role of AS1.0 in pump.  API docs here: [github.com/e14n/pump.io/blob/master/API.md](https://github.com/e14n/pump.io/blob/master/API.md)

- **[activitystreams-unnoficial](https://github.com/snarfed/activitystreams-unofficial)** - [Ryan Barrett](https://snarfed.org/):

  Not involved in the WG but develops a popular silo to AS conversion tool called AS-Unnoficial which powers [brid.gy](http://brid.gy).

  > - 16:38 snarfed> bret: i haven't followed 2.0, but probably not much. i like having AS as a common format, but i generally don't care about the details of the schema
  > - 16:39 snarfed> bret: …having said that, i am using some of the new 2.0 features, e.g. allowing images in attachments to be lists. https://github.com/snarfed/activitystreams-unofficial/commit/da99bf304322ea382fdd03e67ae01f4a867abf56
  > - 16:39 bret> snarfed: would you likely track A-U to use AS2.0 given the fairly significant changes?
  > - 16:40 snarfed> bret: i don't know. maybe?
  > - 16:40 bret> like check out https://jasnell.github.io/w3c-socialwg-activitystreams/activitystreams2.html#h3_example-2
  > - 16:40 snarfed> no a-u users have asked about 2.0, so i'm not seeing demand yet
  > - 16:41 snarfed> bret: that fragment doesn't seem to work
  > - 16:42 bret> what is going on is there are a lot of participants asking for json-ld users, but they are not currently using AS themselves, so just trying to probe different people who are actually consuming/generating it on their  throught
  > - 16:42 bret> s
  > - 16:42 bret> thoughts*
  > - 16:43 bret> gah autocorrect kills me
  > - 16:44 snarfed> bret: ok. i doubt i can help much, but fwiw, most a-u users like it because it normalizes the different silos' data to a common format. they don't care as much what that format is, AS 1.0 or 2.0 or whatever
  > - 16:45 bret> that was my impression
  > - 16:53 bret> snarfed: do you have any opinion on calls to change that common AS vocab in fairly significant ways?  (in this case to satisfy the LD crowd needs)  It seems like this might be disruptive to the primary use case of A-U   users, which seems to be consistent/common vocab.
  > - 16:54 bret> (just in general)
  > - 16:55 snarfed> bret: i don't have a strong opinion. if 2.0 is that backward incompatible, and if i implemented it, i'd probably support both 1.0 and 2.0 and let users choose
  > - 16:55 bret> rgr
  >
  > <small><cite>[#indiewebcamp IRC](http://indiewebcamp.com/irc/2014-10-14#t1413329922922) Freenode</cite></small>

- Need to research more...

## What was the general scope of AS1.0 and what other specs did it rely on?

[Activity Streams 1.0](http://activitystrea.ms/specs/json/1.0/)

  - Serialized as [JSON]()
  - What vocab did it use?
  - Needs research...

## tldr; SocialWG Charter

  - [W3C Social Charter](http://www.w3.org/2013/socialweb/social-wg-charter.html)

> [SocialWG will create] **Recommendation Track** deliverables that standardize a common JSON-based syntax for social data, a client-side API, and a Web protocol for federating social information such as status updates.
>
> **Use Cases:**
>
> - User control of personal data
> - Cross-Organization Ad-hoc Federation
> - Embedded Experiences
> - Enterprise Social Business
>
> <small><cite href="http://www.w3.org/2013/socialweb/social-wg-charter.html">SocialWG Charter</cite></small>

## How does AS1.0 Address these UC?  Where did it fail?

Lots of sites claimed to support AS1.0, but AS was criticized over lack of interop.   Where did AS diverge in the wild and what would be required to include those divergences.

## What is the WG currently working on publishing?

The SocialWG is working on publishing two drafts of AS2.0 complete with examples serialized as JSON-LD, although it is noted in the spec that JSON-LD serialization is optional.  This seems concerning as it increases complexity of the examples of a specification that already is criticized for poor consistency across implementations.  Possibly recommend in serializing with the minimal JSON-LD schema vocab (i.e. "@context") rather than full/partial JSON-LD as it is now as a way to address these concerns.

- [Activity Streams 2.0 Draft](http://jasnell.github.io/w3c-socialwg-activitystreams/activitystreams2.html)
- [Activity Vocabulary Draft](http://jasnell.github.io/w3c-socialwg-activitystreams/activitystreams2-vocabulary.html)
- [Activity Actions Draft](https://jasnell.github.io/w3c-socialwg-activitystreams/activitystreams2-actions.html)

## Examples from people arguing for JSON-LD/Actions/URIs/URNs:

Just collecting these here.

- [Google: Build a Small Knowledge Graph Part 3 of 3: Activating Graph Data With Actions](https://www.youtube.com/watch?v=KB94dIamAQc)
- [Google:Schema.org - Potential Actions](http://schema.org/docs/actions.html)
- ...

## Other smaller but notable implementations of AS

- Need to research.

## Silos publishing AS

- Needs Research...

