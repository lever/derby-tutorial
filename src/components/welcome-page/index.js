// Components can be defined as simple Classes. We'll cover methods later on.
// Right now, we're just going to keep it empty.
class WelcomePage {}

// `name` helps us reference the component in our template. With this name, we
// can do in our HTML:
//
// <view is="welcome-page"/>
//
// And this component will show up!
WelcomePage.prototype.name = 'welcome-page'

// `view` tells Derby where the template for this component lives
WelcomePage.prototype.view = __dirname

module.exports = WelcomePage

// That ends `Hello World`! You are now ready for the next section of the
// tutorial.

// Next part: https://github.com/lever/derby-tutorial#racer-basics
