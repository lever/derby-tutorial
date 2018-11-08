// I'll use this component to demonstrate many of things you'd want to do with
// components. Let's get started:
class WholesomeComponent {

  // A component has several lifecycle methods that we want to hook into:
  // - init
  // - create

  // Runs both on the server and the client.
  // TODO: List why we'd want something in init
  init() {
    this.$cats = this.model.at('cats')
  }

  // Runs only on the client.
  // TODO: List why we'd want something in create
  create() {
  }

  _addCat() {
    this.$cats.push('New cat')
  }
}

WholesomeComponent.prototype.name = 'wholesome-component'
WholesomeComponent.prototype.view = __dirname

module.exports = WholesomeComponent
