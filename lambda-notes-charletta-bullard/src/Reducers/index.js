import  { SEE_NOTE } from '../actions';
import notes from '../dummyData';

const initialState = {
  notes: [...notes],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEE_NOTE:
      return { ...state, current: action.payload };

    default:
      return state;
  }
}
