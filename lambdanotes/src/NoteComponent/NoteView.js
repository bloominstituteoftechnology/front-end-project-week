import React from 'react';
// import axios from 'axios';
import '../styles/App.css';
import { Route, Link } from 'react-router-dom';

class NoteView extends React.Component {
    state = {
        notes:[
        { 
            id: 0,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo.',
        },
        { 
            id: 1,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo.',
        },
        { 
            id: 2,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo.',
        },
        { 
            id: 3,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo.',
        },
        { 
            id: 4,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo.',
        },
        { 
            id: 5,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo.',
        },
        { 
            id: 6,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo.',
        },
        { 
            id: 7,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo.',
        },
        { 
            id: 8,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo.',
        },
        { 
            id: 9,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo.',
        },
        { 
            id: 10,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo.',
        },
        { 
            id: 11,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo.',
        },
],
    };

    // componentDidMount() {
    //     axios
    //     .get('http://localhost:5000/api/notes')
    //     .then(response => {
    //         this.setState(() => { notes: response.data });
    //     })
    //     .catch(error => {
    //         console.error('Server error', error);
    //     });
    // }

    render() {
        return(
            <div className="note-list">
                {this.state.notes.map(note => (
                    <SingleNote key={note.id} note={note} />
                        
                    ))}

            </div>
        );
    }
}
function SingleNote({ note }) {
    const  {id, title, paragraph}  = note;
    return (
        <div className="notes-container">
        <Link to={{pathname: "/ViewSingleNote", singlenote: note}}>
            <div className="single-note">
                <h2>{title}</h2>
                <div className='para'> {paragraph} </div>
            </div>
        </Link>
        </div>
    );
}
export default NoteView;