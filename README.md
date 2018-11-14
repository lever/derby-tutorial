# Derby Tutorial

_For Derby v0.10_

## Getting started

Hello, and welcome to our Derby tutorial!

We'll be going through several core features that Derby provides. Along the way, we may build a few features. However, you can think of this tutorial of a sandbox of various Derby features, rather than a tutorial that will produce a full MVP application. We won't be explaining every thing in detail, so you can reference the [DerbyJS docs](https://derbyjs.com/docs/derby-0.10) as you work through the tutorial.

To get started:

```
# Get the repo
> git clone https://github.com/hdavidzhu/derby-tutorial.git
> cd derby-tutorial

# Install dependencies
> npm install

# Start the server
> node src/server.js
```

You may be familiar with *routes* from other frameworks like [express.js](https://expressjs.com). Derby's routing system is built on top of Express.js.

Take a look at `src/index.js` for all the different routes that are available. We have commented thisfile to guide you through it. We suggest having the source code open as you interact with the various
tutorial pieces in your browser.

## Contributing

If you find anything confusing, please [submit an issue here](https://github.com/hdavidzhu/derby-tutorial/issues), or submit a PR with tutorial improvements! Your help and feedback is really appreciated :heart:

## Overview

I recommend following the order of this outline. Some info build on top of each other, and that's especially useful if this is your first time with Derby.

Later on, you can reference this tutorial and [the official docs](https://derbyjs.com/) if you'd like to see anything particular in action.

* [Hello world](#hello-world)
* [Racer basics](#racer-basics)
* [Components in action](#components-in-action)
* [Collaboration and realtime](#collaboration-and-realtime)
* [Collections and data persistence](#collections-and-data-persistence)

## The tutorial

### Hello world

This shows the bare minimals of what a component can offer. First, let's visit
`localhost:3456/simple-component`

Check out the source code in `src/components/simple-component`. `index.js` defines our controller, and `index.html` defines our template.

### Racer basics

TODO

### Components in action

This component is more fully-featured. It shows how you can:

* see a component's lifecycle and set relevant functionality at different phases
* reference Racer models, and read/write data from it
* Add child components inside of the main component, and pass in data and receive outputs
* use view partials without needing a whole component

### Collaboration and realtime

TODO

### Collections and data persistence

TODO
