import {DISPLAY_NOTE} from '../actions';

const initialState = {
  notes: [
    {title: 'Note1 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
    {title: 'Note2 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
    {title: 'Note3 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
    {title: 'Note4 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
    {title: 'Note5 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
    {title: 'Note6 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
    {title: 'Note7 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
    {title: 'Note8 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
  ],
}

export default (state=initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}