import {
  FETCHING_ITEMS,
  FETCHED_ITEMS,
  ADDING_ITEM,
  ADDED_ITEM,
  UPDATING_ITEM,
  UPDATED_ITEM,
  DELETING_ITEM,
  DELETED_ITEM,
  ERROR
} from "../actions";

const initialState = {
  data: [],
  fetching_Items: false,
  fetched_Item: false,
  adding_Item: false,
  added_Item: false,
  updating_Item: false,
  updated_Item: false,
  deleting_Item: false,
  deleted_Item: false,
  error: null
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_ITEMS:
      return {
        ...state,
        fetching_Items: true,
        fetched_Item: false,
        error: null
      };
    case FETCHED_ITEMS:
      // console.log(action.fetched);
      return {
        ...state,
        fetching_Items: false,
        fetched_Item: true,
        data: action.data
      };
    case ADDING_ITEM:
      return {
        ...state,
        adding_Item: true,
        added_Item: false,
        error: null
      };
    case ADDED_ITEM:
      console.log([...state.data].push(action.newItem));
      return {
        ...state,
        adding_Item: false,
        added_Item: true,
        //OPTION-1
        data: [...state.data, action.allItems[action.allItems.length - 1]] // TO REVIEW WITH REAL EXAMPLES
        //OPTION-2
        // data: action.allItems
      };
    case UPDATING_ITEM:
      return {
        ...state,
        updating_Item: true,
        updated_Item: false,
        error: null
      };
    case UPDATED_ITEM:
      return {
        ...state,
        updating_Item: false,
        updated_Item: true,
        //OPTION-1
        // data: action.allItems
        //OPTION-2  => to review with real data
        data: [...state.data.slice(0,action.index), state.dta[action.index] = action. content, ...state.data.slice(action.index + 1) ]
      };
    case DELETING_ITEM:
      return {
        ...state,
        deleting_Item: true,
        deleted_Item: false,
        error: null
      };
    case DELETED_ITEM:
      console.log("action.toDelete", action.toDelete);
      return {
        ...state,
        deleting_Item: false,
        deleted_Item: true,
        //OPTION-1
        // data: action.allItems
        //OPTION-2  => to review with real data
        data: [...state.data.slice(0,action.index), ...state.data(action.index + 1) ]
      };
    case ERROR:
      return {
        ...state,
        error: action.message,
        fetching_Items: false,
        adding_Item: false,
        updating_Item: false,
        deleting_Item: false
      };
    default:
      return state;
  }
};

export default mainReducer;
