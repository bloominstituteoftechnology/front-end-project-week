// import { ADDNOTE, EDITNOTE, DELETENOTE } from "../actions/action";

// const task =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at maximus nisi, ut pulvinar odio. Duis faucibus nisl pien auctor vulputate. Aenean ullamcorper viverra est, in iaculis lacus feugiat nec. Aenean volutpat, urna non imperdiet ullamcorper, orci mi consequat ex, vitae ullamcorper nisi risus quis odio. Etiam interdum tellus gittis interdum. Morbi vel felis arcu. Phasellus eu ex nulla. Nullam ultrices velit ismod bibendum.";

// const intialState = {
//   notes: [
//     {
//       title: "Note-1",
//       task: "",
//       id: 1
//     },

//     {
//       title: "Note-2",
//       task: "",
//       id: 2
//     },
//     {
//       title: "Note-3",
//       task: "",
//       id: 3
//     },
//     {
//       title: "Note-4",
//       task: "",
//       id: 4
//     },
//     {
//       title: "Note-5",
//       task: "",
//       id: 5
//     },
//     {
//       title: "Note-6",
//       task: "",
//       id: 6
//     },
//     {
//       title: "Note-7",
//       task: "",
//       id: 7
//     },
//     {
//       title: "Note-8",
//       task: "",
//       id: 8
//     },
//     {
//       title: "Note-9",
//       task: "",
//       id: 9
//     }
//   ]
// };

// export const notesReducer = (state = intialState, action) => {
//   switch (action.type) {
//     case ADDNOTE:
//       return {
//         ...state,
//         notes: [...state.notes.concat(action.payload)]
//       };
//     case EDITNOTE:
//       return { ...state, notes: (state.notes[action.payload] = action.task) };

//     case DELETENOTE:
//       return {
//         ...state,
//         notes: [...state.notes.filter(task => task !== action.payload)]
//       };

//     default:
//       return state;
//   }
// };
