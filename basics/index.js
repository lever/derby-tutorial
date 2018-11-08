const derby = require('derby')
const LocalDemo = require('./local-demo')

const app = derby.createApp('hello', __filename)

app.use(require('derby-debug'))

app.component(LocalDemo)

app.loadViews(__dirname)

// @param {Object} page
app.get('/local-demo', (page) => {
  page.render(LocalDemo.prototype.name)
})

module.exports = app
