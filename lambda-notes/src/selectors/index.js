
export default (notes, id) => {
  return notes.find(note => note._id === id)
}