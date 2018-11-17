import axios from 'axios';


export const getNotes = (URL) => {
axios.get(URL)
.then( res => {
    this.setState({
        notes: res.data,
    })
})
.catch( err => {
    throw new Error(err);
})

}