export const SEARCH_EDIT = "SEARCH_EDIT"

export const searchEdit = text => {
    return {
        type: SEARCH_EDIT,
        payload: text
    }
}