const _ = require('lodash')
const faker = require('faker')

class PersistenceDemo {

  init() {
    this.$root = this.model.root

    // [Array<String>]
    this.$collectionNames = this.model.at('collectionNames')

    // [Object<String, Object<UUID, Object>>]
    this.$collectionsByName = this.model.at('collectionsByName')

    // [Object<UUID, String>]
    this.$errorMessageByDocId = this.model.at('errorMessageByDocId')

    // [Object<String, String>]
    this.$statusByCollectionName = this.model.at('statusByCollectionName')

    // [Object<String, Array<Object>>] Map of a list of sorted documents by
    // their collection name
    this.model.start(
      'docsByCollectionName',
      this.$collectionsByName,
      (collectionsByName) => {
        return _.mapValues(
          collectionsByName,
          (docsById) => _.sortBy(docsById, 'id')
        )
      }
    )
  }

  create() {
    // Fetch/subscribe to some initial collections to demo what they look like
    this._fetchCollection('apples')
    this._subscribeCollection('bananas')
  }

  _fetchCollection(collectionName) {
    // Define a query to fetch/subscribe to a specific set of documents. '{}'
    // would return all docs of that collection. Limit the returned docs by
    // increasing query specificity
    // @see https://derbyjs.com/docs/derby-0.10/models/queries
    const query = this.model.query(collectionName, {})

    // After defining the query, we async fetch
    query.fetch((err) => {
      if (err) return alert(err)

      // Access docs by:
      console.log("Query results for ${collectionName}:", query.get())

      // They are also present on the root model
      console.log('$root:', this.$root.get())

      this._addCollection(collectionName)
      this.$statusByCollectionName.set(collectionName, 'fetched')
    })
  }

  _subscribeCollection(collectionName) {
    // Subscribing looks just like fetching. After subscribing to docs or
    // queries, we can now get remote updates. (Fetching won't listen to
    // changes)
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
    const docId = this.$root.add(collectionName, {
      name: faker.name.firstName()
    })
  }

  _removeDoc(collectionName, docId) {
    this.$root.del(`${collectionName}.${docId}`)
  }
}

// When user modifies a document, wait until they finish typing and try to save
// the result. Surface any errors if we can't save the doc
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
  // FIXME 12/27/18: After saving something modified in a contenteditable, the
  // cursor resets to the start of the editable area. Debounce to allow user to
  // finish typing in their changes
  500
)

PersistenceDemo.prototype.name = 'persistence-demo'
PersistenceDemo.prototype.view = __dirname

module.exports = PersistenceDemo
