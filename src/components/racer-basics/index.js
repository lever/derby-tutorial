_ = require('lodash')

class RacerBasics {

  create() {
    //// explaining what at does (scoping)
    //// https://derbyjs.com/docs/derby-0.10/models/paths#scoped-models
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

    //// i would explain the magic of the model where you can set paths even if they don't exist
    //// and they would get created for you (which is a really cool thing imo)

    //// also grouping model paths by type -- like in this case all inputs are grouped below
    this.model.set('inputs.set.path', 'donut')
    this.model.set('inputs.set.value', 'chocolate')
    this.model.set('inputs.del.path', 'donut')
    //// these paths are not used in the HTML currently so remove it?
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

  //// i would keep TODO's in a separate branch instead of having comments mixed in with master

  // TODO 11/18/18:
  // - setDiffDeep
  // - setArrayDiff
  // - setArrayDiffDeep

  // Object methods

  add(path, object) {
    this.$exampleData.add(path, _.cloneDeep(object))
  }

  // TODO 11/18/18:
  // - setEach

  // Number methods

  increment(path, byNumber) {
    this.$exampleData.increment(path, byNumber)
  }

  // Array methods

  push(path, value) {
    this.$exampleData.push(path, value)
  }

  // TODO 11/18/18:
  // - unshift
  // - insert
  // - pop
  // - shift
  // - remove
  // - move

  // String methods

  // TODO 11/18/18:
  // - stringInsert
  // - stringRemove
}

RacerBasics.prototype.name = 'racer-basics'
RacerBasics.prototype.view = __dirname

module.exports = RacerBasics

// Next part: https://github.com/lever/derby-tutorial#collaboration-and-realtime
