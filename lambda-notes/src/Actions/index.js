export const ADD = "ADD"


export const add = input => {
    return {
        type: ADD,
        payload: input
    }
}