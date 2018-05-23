export const NOTE_ADDED = 'NOTE_ADDED';


export const fetchSmurfs = () => {
  const getSmurfs = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS }); 
    getSmurfs
      .then(response => {
          dispatch({ type: FETCHED_SMURFS, payload: response.data });
      })
      .catch(err => {
          dispatch({
              type: ERROR,
              payload: 'Error Fetching Smurfs'
          });
      });
  };
};

export const addSmurf = smurf => {
  const postSmurf = axios.post('http://localhost:3333/smurfs', { 
    name: smurf.name,
    age: smurf.age,
    height: smurf.height
  });
  return dispatch => {
    dispatch({ type: ADDING_SMURF }); 
    postSmurf
      .then(resolve => {
          dispatch({ type: ADDED_SMURF, payload: resolve.data });
      })
      .catch(err => {
        dispatch({
            type: ERROR,
            payload: 'Error Adding Smurfs'
        });
    });
  };
};