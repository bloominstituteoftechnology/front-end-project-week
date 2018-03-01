const NoteAPI = {
  notes: [
    { 
      id: 1, 
      title: "Note 1", 
      content: "overflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflow" 
    },
    { 
      id: 2, 
      title: "Note 2", 
      content: "Null" 
    },
    { 
      id: 3, 
      title: "Note 3", 
      content: "Null" 
    },
    { 
      id: 4, 
      title: "Note 4", 
      content: "Null" 
    },
    { 
      id: 5, 
      title: "Note 5", 
      content: "Null" 
    },
    { 
      id: 6, 
      title: "Note 6", 
      content: "Null" 
    },
  ],
  all: function() { return this.notes},
  get: function(id) {
    const isNote = n => n.id === id
    return this.notes.find(isNote)
  }
}

export default NoteAPI;