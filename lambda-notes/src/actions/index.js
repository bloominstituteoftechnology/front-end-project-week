import axios from 'axios';

// GET, POST, PUT, DELETE

export const GET_NOTES = 'GET_NOTES';

export const getNotes = () => {
    const payload = axios.get("https://killer-notes.herokuapp.com/note/get/all");
    return {
        type: GET_NOTES, 
        payload
    };
}


