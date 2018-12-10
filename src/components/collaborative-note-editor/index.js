class CollaborativeNoteEditor {

  init() {
    // Get `noteId` from the route param. See:
    // - ./src/components/collaborative-note-editor/index.js
    // - https://derbyjs.com/docs/derby-0.10/apps/routes#routes
    let noteId = this.model.root.get('$render.params.noteId')

    // Learn more about `ref` and `scope` here:
    // - https://derbyjs.com/docs/derby-0.10/models/references
    // - https://derbyjs.com/docs/derby-0.10/models/paths#scoped-models
    this.$note = this.model.ref('note', this.model.scope(`notes.${noteId}`))
  }
}

CollaborativeNoteEditor.prototype.name = 'collaborative-note-editor'
CollaborativeNoteEditor.prototype.view = __dirname

CollaborativeNoteEditor.load = (model, params, queries, cb) => {
  $note = model.at(`notes.${params.noteId}`)

  // Fetch the remote note document, and subscribe to any changes
  // - https://derbyjs.com/docs/derby-0.10/models/backends#loading-data-into-a-model
  $note.subscribe((err) => {

    // If the note doesn't exist, create a new one and set it to the following
    // string:
    $note.createNull('This note is collaborative! Try editing this in two different windows.')
    return cb(err)
  })
}

module.exports = CollaborativeNoteEditor
