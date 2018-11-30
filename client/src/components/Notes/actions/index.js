export const SET_SORTED_NOTES = 'SET_SORTED_NOTES';
export const setSortedNotes = sortedNotes => {
  return {
    type: SET_SORTED_NOTES,
    sortedNotes,
  }
}
