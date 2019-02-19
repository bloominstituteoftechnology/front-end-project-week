let API_URL = '';

if (process.env.NODE_ENV === 'production')
    API_URL = "https://lambda-notes-be-eric-whitcomb.herokuapp.com/api";
else if (process.env.NODE_ENV === 'development')
    API_URL = "http://localhost:3300/api";

export {
    API_URL
};