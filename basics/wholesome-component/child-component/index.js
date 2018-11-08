class ChildComponent {
  create() {
    this.on('destroy', () => {
      console.log('I am destroying this component!')
    })
  }
}

ChildComponent.prototype.name = 'child-component'
ChildComponent.prototype.view = __dirname

module.exports = ChildComponent
