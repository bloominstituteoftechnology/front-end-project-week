
import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from "../actions";

const initialState = { 
  notes: [
      {
        id: 1,
        title: "Note Title 1",
        body: 
        "Hello Peter what's happening.I'm gonna need you to go ahead and come in tomorrow. So if you could be here at around....9 that'd be great."
      },
      {
        id: 2,
        title: "Note Title 2",
        body: 
        "Why does it say paper jam when there is no paper jam? I swear to God, one of these days I am just kicking this this piece of s**t out the window!"
      },
      {
        id: 3,
        title: "Note Title 3",
        body: 
        "Oh, oh, and I almost forgot. Ahh, I'm also gonna need you to go ahead and come in on Sunday, too."
      },
      {
        id: 4,
        title: "Note Title 4",
        body: 
        "Data-point blue sky thinking, so high touch client and on-brand but completeley fresh. Productize old boys club going forward or best practices bottleneck mice but beef up."
      },
      {
        id: 5,
        title: "Note Title 5",
        body: 
        "It was a JUMP TO CONCLUSIONS mat. You see, it would be this mat that you would put on the floor... and would have different CONCLUSIONS written on it that you could JUMP TO."
      },
      {
        id: 6,
        title: "Note Title 6",
        body: 
        "Well see, they wrote all this bank software, and, uh, to save space, they used two digits for the date instead of four. So, like, 98 instead of 1998? Uh, so I go through these thousands of lines of code and, uh... it doesn't really matter. I uh, I don't like my job, and, uh, I don't think I'm gonna go anymore."
      },
      {
        id: 7,
        title: "Note Title 7",
        body: 
        "You know what, Stan, if you want me to wear 37 pieces of flair, like your pretty boy over there, Brian, why don't you just make the minimum 37 pieces of flair?"
      },
      {
        id: 8,
        title: "Note Title 8",
        body: 
        "Hi, Peter. What's happening? We need to talk about your TPS reports."
      },
      {
        id: 9,
        title: "Note Title 9",
        body: 
        "Michael, I did nothing. I did absolutely nothing, and it was everything that I thought it could be."
      }
  ]   

}


export default function notes(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, { ...action.note, id: action.id }]
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.slice().filter(note => note.id !== action.id)
      };
    case EDIT_NOTE:
      let dupe = state.notes.slice();
      dupe.filter(note => note.id !== action.id).push(action.note);
      return {
        ...state,
        notes: dupe
      };
    default:
      return state;
  }
}