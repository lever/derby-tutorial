class CollaborativeNoteEditor {

  init() {
    //// i would also call out the configuration you need to do in ther server where the path ID
    //// https://derbyjs.com/docs/derby-0.10/components/scope#root-model
    let noteId = this.model.root.get('$render.params.noteId')
    //// .scope means getting it at the root
    //// https://derbyjs.com/docs/derby-0.10/models/references#references
    this.$note = this.model.ref('note', this.model.scope(`notes.${noteId}`))
  }
}

CollaborativeNoteEditor.prototype.name = 'collaborative-note-editor'
CollaborativeNoteEditor.prototype.view = __dirname

CollaborativeNoteEditor.load = (model, params, queries, cb) => {
  $note = model.at(`notes.${params.noteId}`)
  $note.subscribe((err) => {
    $note.createNull('This note is collaborative! Try editing this in two different windows.')
    return cb(err)
  })
}

module.exports = CollaborativeNoteEditor
