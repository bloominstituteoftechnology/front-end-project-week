const initialState = {
  notes: [
    {
      tags: ['tag', 'otherTag'],
      title: 'Test Note One',
      textBody: 'This is a test note!',
    },
    {
      tags: ['tag', 'otherTag'],
      title: 'Test Note Two',
      textBody: 'This is another test note!',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
