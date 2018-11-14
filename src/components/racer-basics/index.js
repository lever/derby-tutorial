_ = require('lodash')

class RacerBasics {

  create() {
    this.$exampleData = this.model.at('exampleData')
    this.$exampleData.set({
      bitcoin: 3,
      books: [
        'Pride and Prejudice'
      ],
      donut: 'caramel',
      missingDonut: null,
      pokemons: {},
    })

    this.model.set('inputs.set.path', 'donut')
    this.model.set('inputs.set.value', 'chocolate')
    this.model.set('inputs.del.path', 'donut')
    this.model.set('inputs.setNull.path', 'missingDonut')
    this.model.set('inputs.setNull.value', 'hazelnut')
    this.model.set('inputs.setDiff.path', 'donut')
    this.model.set('inputs.setNull.value', 'chocolate raspberry')
    this.model.set('inputs.add.path', 'pokemons')
    this.model.set('inputs.add.value', {type: 'pikachu'})
    this.model.set('inputs.increment.path', 'bitcoin')
    this.model.set('inputs.increment.value', 2)
    this.model.set('inputs.push.path', 'books')
    this.model.set('inputs.push.value', 'What if? - Randall Munroe')
  }

  // General methods

  set(path, value) {
    this.$exampleData.set(path, value)
  }

  del(path) {
    this.$exampleData.del(path)
  }

  setNull(path, value) {
    this.$exampleData.setNull(path, value)
  }

  setDiff(path, value) {
    this.$exampleData.setDiff(path, value)
  }

  // TODO:
  // - setDiffDeep
  // - setArrayDiff
  // - setArrayDiffDeep

  // Object methods

  add(path, object) {
    this.$exampleData.add(path, _.cloneDeep(object))
  }

  // TODO:
  // - setEach

  // Number methods

  increment(path, byNumber) {
    this.$exampleData.increment(path, byNumber)
  }

  // Array methods

  push(path, value) {
    this.$exampleData.push(path, value)
  }

  // TODO:
  // - unshift
  // - insert
  // - pop
  // - shift
  // - remove
  // - move

  // String methods

  // TODO:
  // - stringInsert
  // - stringRemove
}

RacerBasics.prototype.name = 'racer-basics'
RacerBasics.prototype.view = __dirname

module.exports = RacerBasics
