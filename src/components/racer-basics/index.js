_ = require('lodash')

class RacerBasics {

  create() {
    // Create a scoped model with `model.at`. Scoping allows us to read/write
    // from a scoped part of our data store, given a path (`exampleData`)
    // https://derbyjs.com/docs/derby-0.10/models/paths#scoped-models
    this.$exampleData = this.model.at('exampleData')
    //// also explaining the significance of the $ prepending the var name
    this.$exampleData.set({
      bitcoin: 3,
      books: [
        'Pride and Prejudice'
      ],
      donut: 'caramel',
      missingDonut: null,
      pokemons: {},
    })

    // Set default values for inputs. Racer lets you set on a path even if the
    // parent object doesn't exist
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

  //// this function is not used in the HTML so remove it?
  setNull(path, value) {
    this.$exampleData.setNull(path, value)
  }

  setDiff(path, value) {
    this.$exampleData.setDiff(path, value)
  }

  // TODO 11/18/18: Add examples for
  // - setDiffDeep
  // - setArrayDiff
  // - setArrayDiffDeep

  // Object methods

  add(path, object) {
    this.$exampleData.add(path, _.cloneDeep(object))
  }

  // TODO 11/18/18: Add examples for
  // - setEach

  // Number methods

  increment(path, byNumber) {
    this.$exampleData.increment(path, byNumber)
  }

  // Array methods

  push(path, value) {
    this.$exampleData.push(path, value)
  }

  // TODO 11/18/18: Add examples for
  // - unshift
  // - insert
  // - pop
  // - shift
  // - remove
  // - move

  // String methods

  // TODO 11/18/18: Add examples for
  // - stringInsert
  // - stringRemove
}

RacerBasics.prototype.name = 'racer-basics'
RacerBasics.prototype.view = __dirname

module.exports = RacerBasics

// Next part: https://github.com/lever/derby-tutorial#collaboration-and-realtime
