import axios from 'axios';

export const FETCH_CARDS = 'FETCH_CARDS'
export const CREATE_CARD = 'CREATE_CARD'
export const CARD_CREATED = 'CARD_CREATED'
export const VIEW_CARD = 'VIEW_CARD'
export const EDIT_CARD = 'EDIT_CARD'
export const REMOVE_CARD = 'REMOVE_CARD'


export const fetchCards = () => {
    return {
        type: FETCH_CARDS,
    }
}

export const createCard = () => {
    return {
        type: CREATE_CARD
    }
}

export const cardCreated = () => {
    return {
        type: CARD_CREATED
    }
}

export const viewCard = () => {
    return {
        type: VIEW_CARD
    }
}

export const editCard = () => {
    return {
        type: EDIT_CARD 
    }
}

export const removeCard = () => {
    return {
        type: REMOVE_CARD
    }
}