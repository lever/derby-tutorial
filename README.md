# Derby Tutorial

_For Derby v0.10_

## Getting started

Hello, and welcome to our Derby tutorial!

We'll be going through several core features that Derby provides. Along the way, we may build a few features.

To get started:

```
# Install dependencies
> npm install

# Start the server
> node src/server.js
```

Take a look at `src/index.js` for all the different routes that are available.

## Guide

### Simple component

This shows the bare minimals of what a component can offer. First, let's visit
`localhost:3456/simple-component`

Check out the source code in `src/components/simple-component`. `index.js` defines our controller, and `index.html` defines our template.

### Wholesome component

This component is more fully-featured. It shows how you can:

* see a component's lifecycle and set relevant functionality at different phases
* reference Racer models, and read/write data from it
* Add child components inside of the main component, and pass in data and receive outputs
* use view partials without needing a whole component

## Contributing

If you find anything confusing, please [submit an issue here](https://github.com/hdavidzhu/derby-tutorial/issues), or submit a PR with tutorial improvements! Your help and feedback is really appreciated :heart:

## TODOs

- [ ] Nested components (arguments and events)
- [ ] Simple partials
- [ ] Collaboration
- [ ] Collections
- [ ] Persistence
