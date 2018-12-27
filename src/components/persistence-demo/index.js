const _ = require('lodash')
const faker = require('faker')

class PersistenceDemo {

  init() {
    this.$collectionNames = this.model.at('collectionNames')
    this.$collectionsByName = this.model.at('collectionsByName')
    this.$errorMessageByDocId = this.model.at('errorMessageByDocId')
    this.$root = this.model.root
    this.$statusByCollectionName = this.model.at('statusByCollectionName')

    this.model.start(
      'docsByCollectionName',
      this.$collectionsByName,
      (collectionsByName) => _.mapValues(collectionsByName, (docsById) => _.sortBy(docsById, 'id'))
    )
  }

  create() {
    this._fetchCollection('apples')
    this._subscribeCollection('bananas')
  }

  _fetchCollection(collectionName) {
    this.model.query(collectionName, {}).fetch((err) => {
      if (err) return alert(err)
      this._addCollection(collectionName)
      this.$statusByCollectionName.set(collectionName, 'fetched')
    })
  }

  _subscribeCollection(collectionName) {
    this.model.query(collectionName, {}).subscribe((err) => {
      if (err) return alert(err)
      this._addCollection(collectionName)
      this.$statusByCollectionName.set(collectionName, 'subscribed')
    })
  }

  _addCollection(collectionName) {
    const collectionNames = this.$collectionNames.getDeepCopy() || []
    if (collectionNames.includes(collectionName)) return
    collectionNames.push(collectionName)
    collectionNames.sort()
    this.$collectionNames.setArrayDiff(collectionNames)
    this.$collectionsByName.ref(collectionName, this.$root.at(collectionName))
  }

  _addDoc(collectionName) {
    const docId = this.$root.add(collectionName, {name: faker.name.firstName()})
  }

  _removeDoc(collectionName, docId) {
    this.$root.del(`${collectionName}.${docId}`)
  }
}

PersistenceDemo.prototype._onDocInput = _.debounce(
  function (e, collectionName, docId) {
    try {
      const doc = JSON.parse(e.target.textContent)
      this.$root.setDiffDeep(`${collectionName}.${docId}`, doc)
      this.$errorMessageByDocId.del(docId)
    } catch (err) {
      this.$errorMessageByDocId.setDiff(docId, err.message)
    }
  },
  500
)

PersistenceDemo.prototype.name = 'persistence-demo'
PersistenceDemo.prototype.view = __dirname

module.exports = PersistenceDemo
