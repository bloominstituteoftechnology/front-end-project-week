import { createSelector } from 'reselect'

const searchNoteByText = (notes, searchText) => {
  let currentNotes = notes
  if (!currentNotes || !searchText) {
    return currentNotes
  }
  
  const filteredId = Object.keys(currentNotes)
    .filter(id => 
      currentNotes[id].title.toLowerCase().includes(searchText.toLowerCase())
      ||
      currentNotes[id].content.toLowerCase().includes(searchText.toLowerCase())
    )
    
  let filterObj = {}

  filteredId.forEach(id => filterObj[id] = currentNotes[id])

  return filterObj
}

export const makeSearchNoteByText = () => createSelector(
  searchNoteByText,
  (notes) => ({ notes })
)