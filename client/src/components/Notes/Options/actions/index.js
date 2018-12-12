export const NOTE_SORT = 'NOTE_SORT';
export const noteSort = (sortNotes) => {
  return {
    type: NOTE_SORT,
    sortNotes,
  }
}

export const NOTE_FILTER = 'NOTE_FILTER';
export const noteFilter = (filterNotes) => {
  return {
    type: NOTE_FILTER,
    filterNotes,
  }
}
