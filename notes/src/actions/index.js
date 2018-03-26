export const ADD = "ADD";



export const add = (t,c,i) =>{
  return {
    type:ADD,
    text:c,
    title:t,
    id:i
  }
}
