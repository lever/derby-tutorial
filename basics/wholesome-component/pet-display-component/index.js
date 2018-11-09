class PetDisplayComponent {
  create() {
    this.on('destroy', () => {
      console.log('I am destroying this component!')
    })
  }
}

PetDisplayComponent.prototype.name = 'pet-display-component'
PetDisplayComponent.prototype.view = __dirname

module.exports = PetDisplayComponent
