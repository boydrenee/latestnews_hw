/*
*****************************************************
This creates a model for the notes the user creates.
  Notes will be attached to the articles because
   the article id will be stored with the note.
*****************************************************
*/
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var noteSchema = new Schema({
  _headlineId: {
    type: Schema.Types.ObjectId,
    ref: "Headline"
  },
  date: String,
  noteText: String
});

var Note = mongoose.model("Note", noteSchema);

module.exports = Note;