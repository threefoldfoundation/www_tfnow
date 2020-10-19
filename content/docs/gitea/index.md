---
description: ''
sidebar: 'docs'
prev: '/docs/dmcustomers/'
next: '/docs/zeroci/'
---

# Gitea

![](./img/gitea.png)

## What is gitea ?

Gitea is a painless self-hosted Git service. It is similar to GitHub, Bitbucket, and GitLab. Gitea is a fork of Gogs. 

### How it all started
Git development began in April 2005, after many developers of the Linux kernel gave up access to BitKeeper, a proprietary source-control management (SCM) system that they had been using to maintain the project since 2002. Linus Torvalds wanted a distributed system that he could use like BitKeeper, but none of the available free systems met his needs. Torvalds cited an example of a source-control management system needing 30 seconds to apply a patch and update all associated metadata, and noted that this would not scale to the needs of Linux kernel development, where synchronizing with fellow maintainers could require 250 such actions at once. For his design criterion, he specified that patching should take no more than three seconds, and added three more points:

- Take Concurrent Versions System (CVS) as an example of what **not** to do; if in doubt, make the exact opposite decision.
- Support a distributed, BitKeeper-like workflow.
- Include very strong safeguards against corruption, either accidental or malicious.

These criteria eliminated every then existent version-control systems, so Torvalds set out to write his own. The development of Git began on 3 April 2005. Torvalds announced the project on 6 April and became self-hosting the next day.

### Naming

Torvalds sarcastically quipped about the name git (which means "unpleasant person" in British English slang): "I'm an egotistical bastard, and I name all my projects after myself. First 'Linux', now 'git'. The man page describes Git as "the stupid content tracker". The read-me file of the source code elaborates further:

"git" can mean anything, depending on your mood.

- random three-letter combination that is pronounceable, and not actually used by any common UNIX command. The fact that it is a mispronunciation of "get" may or may not be relevant.
- stupid. contemptible and despicable. simple. Take your pick from the dictionary of slang.
- "global information tracker": you're in a good mood, and it actually works for you. Angels sing, and a light suddenly fills the room.
- "goddamn idiotic truckload of sh*t": when it breaks

Git since then has become a standard for developers to use globally and many commercial (centralized) versions of the software have been created.  Github (acquired by Microsoft) and Gitlab being well known service providers of Git services.

Powerful alternative to e.g. centralized Github.

- More info see https://gitea.io/

## How to Deploy ?

THE widget on the TF Marketplace allows you to deploy a Gitea instance by answering a few questions. 

- [ ] Choose a name for you solution.  This name will identify this Gitea deployment in solutions overview and will form a part of the unique URL to access the repository. 
- [ ] Predefined locations for the demo deployments.  In the future this will be expanded and you will be able to choose your deployment location on any of the TF GRid 3nodes.
- [ ] This will deploy the Gitea software on testnet and provide you with a URL to do the configuration of the Gitea software.

## FAQs

- Stay tuned

