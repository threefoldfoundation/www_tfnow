# Gridsome X ThreeFold

- Any change to the content here should auto-deploy
- All changes to the content can be seen under this link

[./docs](./docs)


### to get started

- install npm & yarn
- git clone this repo
- go into the repo and run ```install_gridsome.sh``` if not done yet
- go into the repo and run ```install.sh``` which will make sure you have the node packages in your repo

### Where is all the content ?

- It is under the direcory [content/docs](content/docs)
- All files are markdown (.md) format

### Where are all the images ?

- Please put all the images under this directory [static](static)
- To use an image in the markdown file, you can simply call it as an example below,

```
#thats  not how we should call images !
![](./crystaltwin.png)

siteurl/image.png
```
### Editing md files

- All files start with this piece of code, this is meant to control navigation into different sections defined in the sidebar menu.
```
---
description: ''
sidebar: 'docs'
prev: '/docs/wiki-publisher/'
next: '/docs/digitalme/'
---
```
## You want to go deeper ?

![https://docc-theme.netlify.app](https://docc-theme.netlify.app)


to install a new version of this

```
gridsome create threefold-now https://github.com/mrcrmn/docc
```

