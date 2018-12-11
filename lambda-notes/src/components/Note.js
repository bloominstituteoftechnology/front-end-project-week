import React from 'react';
import { Link } from 'react-router-dom';
import NoteCard from './NoteCard';
// import axios from 'axios';

const Note = props => {
    return (
        <div>
            <Link to={`/note/${props.id}`}>
            <h4 onClick={() => props.fetchNote(props.id)}>{props.title}</h4></Link>
        </div>
    )
}

export default Note;



// class Note extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             note: null
//         }
//     }

//     componentDidMount() {
//         const id = this.state.match.params.id;
//         this.fetchNote(id);
//     }

//     render() {

//         const { title, textBody } = this.state.note;
//         return(
//         <div className="note-card">
//         <NoteCard
//             title={title}
//             textBody={textBody} />
//         </div> )
//     }
// }

// export default Note;