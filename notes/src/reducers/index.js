const initialTestState = {
      notes: [
        {
          title: 'TestNational Assurance Supervisor',
          entry: 'Quasi ut accusamus rem.',
        },
        {
          title: 'Investor Intranet Director',
          entry: 'Sint rerum vero incidunt aperiam consectetur consequatur ullam in distinctio.',
        }
      ],
    };

const notesReducer = (state = initialTestState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default notesReducer;