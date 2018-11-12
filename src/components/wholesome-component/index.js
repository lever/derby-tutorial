const faker = require('faker')

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
    this.$dogs = this.model.at('dogs')
  }

  // Runs only on the client.
  // TODO: List why we'd want something in create
  create() {
  }

  _addCat() {
    this.$cats.push(faker.name.firstName())
  }

  _addDog() {
    // Rather than using a scoped Racer Model, we can also just push to the
    // correct path
    this.model.push('dogs', faker.name.firstName())
  }
}

WholesomeComponent.prototype.name = 'wholesome-component'
WholesomeComponent.prototype.view = __dirname

module.exports = WholesomeComponent
