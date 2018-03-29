export const ADD = "ADD";
export const EDIT = "EDIT";
export const REMOVE = "REMOVE";


export const edit = (t,c,i) =>{
  return {
    type:EDIT,
    text:c,
    title:t,
    id:i
  }
}

export const remove = (i) =>{
  return {
    type:REMOVE,
    id:i
  }
}

export const add = (t,c,i) =>{
  return {
    type:ADD,
    text:c,
    title:t,
    id:i
  }
}
