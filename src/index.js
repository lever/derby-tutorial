// Let's import all of our dependencies first.
const derby = require('derby')

const PetDisplayComponent = require('./components/wholesome-component/pet-display-component')
const SimpleComponent = require('./components/simple-component')
const WholesomeComponent = require('./components/wholesome-component')

// A Derby app lets us register components, views, templates, and define routes.
const app = derby.createApp('hello', __filename)

// `derb-debug` is a middleware that lets us do things like inspect data and
// components on the page. More info here:
// TODO
app.use(require('derby-debug'))

// Components are defined as simple Javascript classes. They are registered on
// Derby by calling `app.component(...)`
app.component(PetDisplayComponent)
app.component(SimpleComponent)
app.component(WholesomeComponent)

app.loadViews(__dirname)

// This is a great starting place. Visit this route in the browser and look at
// the related source code!
app.get('/simple-component', (page) => {
  page.render(SimpleComponent.prototype.name)
})

app.get('/wholesome-component', (page) => {
  page.render(WholesomeComponent.prototype.name)
})

module.exports = app
