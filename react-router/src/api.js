// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const NotesAPI = {
  notes: [
    { note: 1, name: "Ben Blocker", position: "G" },
    { note: 2, name: "Dave Defender", position: "D" },
    { note: 3, name: "Sam Sweeper", position: "D" },
    { note: 4, name: "Matt Midfielder", position: "M" },
    { note: 5, name: "William Winger", position: "M" },
    { note: 6, name: "Fillipe Forward", position: "F" }
  ],
  all: function() { return this.notes},
  get: function(id) {
    const isNote = p => p.note === id
    return this.note.find(isNote)
  }
}

export default NotesAPI
