export const ADDNOTE = "ADDNOTE";
// export const DELETENOTE = "DELETENOTE";
// export const UPDATENOTE = "UPDATENOTE";
// export const CHECKUPDATE = "CHECKUPDATE";
// export const REORDERSTATE = "REORDERSTATE";


export const addNote = note => {
  return {
    type: ADDNOTE,
    payload: note
  };
};

// export const updateNote = (noteTitle, noteBody, i) => {
//   return {
//     type: UPDATENOTE,
//     title: noteTitle,
//     payload: noteBody,
//     index: i
//   };
// };

// export const deleteNote = note => {
//   return {
//     type: DELETENOTE,
//     payload: note
//   };
// };

// export const checkUpdate = (bool, i) => {
//   return {
//     type: CHECKUPDATE,
//     payload: bool,
//     index: i
//   };
// };

// export const reorderState = completeObject => {
//   return {
//     type: REORDERSTATE,
//     payload: completeObject
//   };
// };
