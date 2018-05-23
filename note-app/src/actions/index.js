import axios from 'axios';

export const FETCH_CARDS = 'FETCH_CARDS'

export const fetchCards = () => {
    return {
        type: FETCH_NOTES
    }
}