import {} from '../actions';

const initialState = {
  notes: [
    {
      tags: [],
      _id: '5ba8145811b7c40014cb7abf',
      title: 'Blah BLah',
      textBody: 'dsfsdf',
    },
    {
      tags: [],
      _id: '5ba818fc11b7c40014cb7ac2',
      title: 'hhhhhhh',
      textBody: 'hhhhhhhhhhhhhhhhhhhhhhh',
    },
    {
      tags: [],
      _id: '5ba903d1d7042d0014318b47',
      title: 'My note.',
      textBody: 'yep',
    },
    {
      tags: ['dfdfd'],
      _id: '5ba914e8d7042d0014318b48',
      title: 'dfdfdf',
      textBody: 'dfdfd',
    },
    {
      tags: [],
      _id: '5ba920d1d7042d0014318b4b',
      title: 'title',
      textBody: 'text',
    },
    {
      tags: [''],
      _id: '5ba80b2a11b7c40014cb7ab1',
      title: 'kkkkkkkkkkkkkkk',
      textBody: 'iiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    },
    {
      tags: [''],
      _id: '5ba80b2d11b7c40014cb7ab2',
      title: 'kkkkkkkkkkkkkkk',
      textBody: 'nope',
    },
  ],
  fetchingData: false,
  error: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
