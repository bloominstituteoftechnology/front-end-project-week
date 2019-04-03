const mongoose = require("mongoose");

const noteDefinition = {
    title: {
        type: String,
        required: true, 
        unique: true, 
        index: true
    },
    body: {
        type: String,
        required: true
    }
}

const noteOptions = {
    timestamps: true
}

const NoteSchema = new mongoose.Schema(noteDefinition, noteOptions);

const NotesModel = mongoose.model("Note", NoteSchema, "notes");

module.exports = NotesModel;