import axios from 'axios';

export const GET_NOTES = 'GET_NOTES'

export const getNotes = () => {
    return { 
        type:  GET_NOTES
    }
}