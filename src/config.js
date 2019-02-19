let API_URL = "http://localhost:3300/api"

if (process.env.NODE_ENV === 'prod')
    API_URL = "https://lambda-notes-be-eric-whitcomb.herokuapp.com/api"

export {
    API_URL
};