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
      content: "Walk with me to the end Stare with me into the abyss Do you feel like letting go? I wonder how far down it is Nothing is fun" 
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
  get: function(id) {
    const isNote = n => n.id === id
    return this.notes.find(isNote)
  }
}

export default NoteAPI;