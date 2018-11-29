export const SORT_NOTES_ALPHABETICAL = 'SORT_NOTES_ALPHABETICAL';
export const sortNotesAlphabetical = dir => {
  return {
    type: SORT_NOTES_ALPHABETICAL,
    dir,
  }
}

export const SORT_NOTES_TITLE_LENGTH = 'SORT_NOTES_TITLE_LENGTH';
export const sortNotesTitleLength = dir => {
  return {
    type: SORT_NOTES_TITLE_LENGTH,
    dir,
  }
}

export const SORT_NOTES_TEXT_LENGTH = 'SORT_NOTES_TITLE_LENGTH';
export const sortNotesTextLength = dir => {
  return {
    type: SORT_NOTES_TEXT_LENGTH,
    dir,
  }
}
