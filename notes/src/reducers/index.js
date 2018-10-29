const initialState = {
    notes: [
      { title: "Redux Fundamentals", content: "dispatch stuff", id: "01" },
      {
        title: "Reducers and  Actions",
        content: "types and payloads and stuff",
        id: "02"
      }
    ]
  };

  export const rootReducer = (state = initialState, action) => {
      switch (action.type) {
          default: 
          return state
      }
  }