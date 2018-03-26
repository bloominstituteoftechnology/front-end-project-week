export const ADD = "ADD";



export const add = (t,i) =>{
  return {
    type:ADD,
    text:t,
    id:i
  }
}
