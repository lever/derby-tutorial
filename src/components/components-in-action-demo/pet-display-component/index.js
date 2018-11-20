class PetDisplayComponent {
  create() {
    // TODO 11/19/18: This doesn't actually work. Come up with a relevant
    // example that explains how destroy works.
    this.on('destroy', () => {
      console.log('I am destroying this component!')
    })
  }
}

PetDisplayComponent.prototype.name = 'pet-display-component'
PetDisplayComponent.prototype.view = __dirname

module.exports = PetDisplayComponent
