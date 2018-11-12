class CollaborativeNoteEditor {

  init() {
    let noteId = this.model.root.get('$render.params.noteId')
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
