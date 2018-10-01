import React, { Component } from 'react';
import axios from 'axios';

// class NotePage extends React.Component {
//     state = {
//         notes: []
//     }


//     componentDidMount() {
//         axios.get('https://killer-notes.herokuapp.com/note/get/all')
//             .then(res => this.setState({ notes: res.data }))
//             .catch( err => console.log(err));
//     }
//     render() {
//         return (
//             <div className="notepage-div">
//                 {/* <p> {note.textBody} </p> */}
//                 <p>testing</p>
//             </div>
//         )
//     }
// }
function NotePage(props) {
    console.log(props.match.params._id)
    const note = props.notes.find(note => note._id === props.match.params.id);
    console.log(note)
    // console.log(note.textBody)
    // console.log(note.title)
    return (
        <div>
            <h1>{note.title}</h1>
            <p>{note.textBody}</p>
        </div>
    )
}

export default NotePage;