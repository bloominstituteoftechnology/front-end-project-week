import axios from 'axios';
import response from './dummyData';

export const GET_NOTES = 'GET_NOTES'

export const getNotes = () => {
    return { 
        type:  GET_NOTES,
        notes: response.data
    }
}