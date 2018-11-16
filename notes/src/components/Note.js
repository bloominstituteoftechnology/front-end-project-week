import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';


export function Note(props) {
    const id = props._id;
    const note = props.notes.find(note => note._id === id);
    console.log(props.notes)
    return (
        <div>
            
            <h1>Hey! </h1>
        </div>
    )
}


// export class Note extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             note: []
//         };
//     }

    // componentDidMount() {
    //     console.log(this.props.match.params);
    //     const id = this.props.match.params._id;
    //     this.fetchNote(id);
    // }

    // fetchNote = id => {
    //     axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
    //     .then(response => {
    //         this.setState(() => ({ note: response.data }));
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     })
    // }

//     render() {
//         return (
//             <div>
//                 <h4>{this.props.note._id}</h4>
//                 <Route path={`/note/${this.props.note._id}`}
//                     render={props => (
//                     <h1>{props.note._id}</h1>
//                 )} />
//             </div>
//         )
//     }
// }

