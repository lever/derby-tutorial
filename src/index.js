// Let's import all of our dependencies first.
const derby = require('derby')

// These are components. You can think of them as the building blocks of your
// app that encapsulate functionality.
const CollaborativeNoteEditor = require('./components/collaborative-note-editor')
const ComponentsInActionDemo = require('./components/components-in-action-demo')
const HelloWorld = require('./components/hello-world')
const ToDo = require('./components/to-do')
const PersistenceDemo = require('./components/persistence-demo')
const PetDisplayComponent = require('./components/components-in-action-demo/pet-display-component')
const RacerBasics = require('./components/racer-basics')
const WelcomePage = require('./components/welcome-page')

// A Derby app lets us register components, views/templates, and routes.
// Here we are creating an app called 'derby-tutorial'
const app = derby.createApp('derby-tutorial', __filename)

// `derby-debug` is a middleware that lets us do things like inspect data and
// components on the page in the Developer Console.
// More info here: https://github.com/derbyjs/derby-debug
//
// TODO 11/18/18: Add some run-through on all the useful methods that
// derby-debug offers
app.use(require('derby-debug'))

// Components are defined as simple Javascript classes.
// You tell Derby that they exist by by calling `app.component(...)`
app.component(CollaborativeNoteEditor)
app.component(ComponentsInActionDemo)
app.component(HelloWorld)
app.component(ToDo)
app.component(PersistenceDemo)
app.component(PetDisplayComponent)
app.component(RacerBasics)
app.component(WelcomePage)

app.loadStyles(__dirname)
app.loadViews(__dirname)

// This is a great starting place to examine a component. Visit this route in
// the browser and look at the related source code!

app.get('/', (page) => {
 page.render(WelcomePage.prototype.name)
})

app.get('/hello-world', (page) => {
  page.render(HelloWorld.prototype.name)
})

app.get('/to-do', (page) => {
  page.render(ToDo.prototype.name)
})

app.get('/racer-basics', (page) => {
  page.render(RacerBasics.prototype.name)
})

app.get('/components-in-action-demo', (page) => {
  page.render(ComponentsInActionDemo.prototype.name)
})

app.get('/collaborative-note-editor', (page, model) => {
  // If a user visits this directly, let's just create a new note for them
  page.redirect(`/collaborative-note-editor/${model.id()}`)
})

app.get('/collaborative-note-editor/:noteId', (page, model, params, next) => {
  CollaborativeNoteEditor.load(model, params, null, (err) => {
    if (err) return next(err)
    page.render(CollaborativeNoteEditor.prototype.name)
  })
})

app.get('/persistence-demo', (page, model) => {
  page.render(PersistenceDemo.prototype.name)
})

module.exports = app
