// Components can be defined as simple Classes. We'll cover methods later on.
// Right now, I'm just going to keep it empty.
class SimpleComponent {}

// `name` helps us reference the component in our template. With this name, we
// can do in our HTML:
//
// <view is="simple-component"/>
//
// And this component will show up!
SimpleComponent.prototype.name = 'simple-component'

// `view` tells Derby where the template for this component lives
SimpleComponent.prototype.view = __dirname

module.exports = SimpleComponent
