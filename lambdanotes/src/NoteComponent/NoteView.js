import React from 'react';
// import axios from 'axios';
import { Route, Link } from 'react-router-dom';

class NoteView extends React.Component {
    state = {
        notes:[
        { 
            id: 0,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo. Nullam finibus gravida diam id euismod. Vivamus ac est venenatis, dapibus est at, venenatis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu bibendum nunc. Nulla facilisi. Donec a neque eget enim ultricies elementum id in lacus. Suspendisse tristique id diam sed suscipit. Mauris ac metus eget lorem imperdiet placerat ut id augue. Curabitur viverra mi arcu, et scelerisque ligula lobortis eu. Mauris mi turpis, gravida eu ex sed, sodales vulputate ipsum. Etiam sollicitudin eros at purus tempor, vel dictum ante porttitor. Ut dolor nisi, volutpat eu ipsum sed, convallis semper nibh.',
        },
        { 
            id: 1,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo. Nullam finibus gravida diam id euismod. Vivamus ac est venenatis, dapibus est at, venenatis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu bibendum nunc. Nulla facilisi. Donec a neque eget enim ultricies elementum id in lacus. Suspendisse tristique id diam sed suscipit. Mauris ac metus eget lorem imperdiet placerat ut id augue. Curabitur viverra mi arcu, et scelerisque ligula lobortis eu. Mauris mi turpis, gravida eu ex sed, sodales vulputate ipsum. Etiam sollicitudin eros at purus tempor, vel dictum ante porttitor. Ut dolor nisi, volutpat eu ipsum sed, convallis semper nibh.',
        },
        { 
            id: 2,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo. Nullam finibus gravida diam id euismod. Vivamus ac est venenatis, dapibus est at, venenatis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu bibendum nunc. Nulla facilisi. Donec a neque eget enim ultricies elementum id in lacus. Suspendisse tristique id diam sed suscipit. Mauris ac metus eget lorem imperdiet placerat ut id augue. Curabitur viverra mi arcu, et scelerisque ligula lobortis eu. Mauris mi turpis, gravida eu ex sed, sodales vulputate ipsum. Etiam sollicitudin eros at purus tempor, vel dictum ante porttitor. Ut dolor nisi, volutpat eu ipsum sed, convallis semper nibh.',
        },
        { 
            id: 3,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo. Nullam finibus gravida diam id euismod. Vivamus ac est venenatis, dapibus est at, venenatis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu bibendum nunc. Nulla facilisi. Donec a neque eget enim ultricies elementum id in lacus. Suspendisse tristique id diam sed suscipit. Mauris ac metus eget lorem imperdiet placerat ut id augue. Curabitur viverra mi arcu, et scelerisque ligula lobortis eu. Mauris mi turpis, gravida eu ex sed, sodales vulputate ipsum. Etiam sollicitudin eros at purus tempor, vel dictum ante porttitor. Ut dolor nisi, volutpat eu ipsum sed, convallis semper nibh.',
        },
        { 
            id: 4,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo. Nullam finibus gravida diam id euismod. Vivamus ac est venenatis, dapibus est at, venenatis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu bibendum nunc. Nulla facilisi. Donec a neque eget enim ultricies elementum id in lacus. Suspendisse tristique id diam sed suscipit. Mauris ac metus eget lorem imperdiet placerat ut id augue. Curabitur viverra mi arcu, et scelerisque ligula lobortis eu. Mauris mi turpis, gravida eu ex sed, sodales vulputate ipsum. Etiam sollicitudin eros at purus tempor, vel dictum ante porttitor. Ut dolor nisi, volutpat eu ipsum sed, convallis semper nibh.',
        },
        { 
            id: 5,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo. Nullam finibus gravida diam id euismod. Vivamus ac est venenatis, dapibus est at, venenatis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu bibendum nunc. Nulla facilisi. Donec a neque eget enim ultricies elementum id in lacus. Suspendisse tristique id diam sed suscipit. Mauris ac metus eget lorem imperdiet placerat ut id augue. Curabitur viverra mi arcu, et scelerisque ligula lobortis eu. Mauris mi turpis, gravida eu ex sed, sodales vulputate ipsum. Etiam sollicitudin eros at purus tempor, vel dictum ante porttitor. Ut dolor nisi, volutpat eu ipsum sed, convallis semper nibh.',
        },
        { 
            id: 6,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo. Nullam finibus gravida diam id euismod. Vivamus ac est venenatis, dapibus est at, venenatis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu bibendum nunc. Nulla facilisi. Donec a neque eget enim ultricies elementum id in lacus. Suspendisse tristique id diam sed suscipit. Mauris ac metus eget lorem imperdiet placerat ut id augue. Curabitur viverra mi arcu, et scelerisque ligula lobortis eu. Mauris mi turpis, gravida eu ex sed, sodales vulputate ipsum. Etiam sollicitudin eros at purus tempor, vel dictum ante porttitor. Ut dolor nisi, volutpat eu ipsum sed, convallis semper nibh.',
        },
        { 
            id: 7,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo. Nullam finibus gravida diam id euismod. Vivamus ac est venenatis, dapibus est at, venenatis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu bibendum nunc. Nulla facilisi. Donec a neque eget enim ultricies elementum id in lacus. Suspendisse tristique id diam sed suscipit. Mauris ac metus eget lorem imperdiet placerat ut id augue. Curabitur viverra mi arcu, et scelerisque ligula lobortis eu. Mauris mi turpis, gravida eu ex sed, sodales vulputate ipsum. Etiam sollicitudin eros at purus tempor, vel dictum ante porttitor. Ut dolor nisi, volutpat eu ipsum sed, convallis semper nibh.',
        },
        { 
            id: 8,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo. Nullam finibus gravida diam id euismod. Vivamus ac est venenatis, dapibus est at, venenatis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu bibendum nunc. Nulla facilisi. Donec a neque eget enim ultricies elementum id in lacus. Suspendisse tristique id diam sed suscipit. Mauris ac metus eget lorem imperdiet placerat ut id augue. Curabitur viverra mi arcu, et scelerisque ligula lobortis eu. Mauris mi turpis, gravida eu ex sed, sodales vulputate ipsum. Etiam sollicitudin eros at purus tempor, vel dictum ante porttitor. Ut dolor nisi, volutpat eu ipsum sed, convallis semper nibh.',
        },
        { 
            id: 9,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo. Nullam finibus gravida diam id euismod. Vivamus ac est venenatis, dapibus est at, venenatis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu bibendum nunc. Nulla facilisi. Donec a neque eget enim ultricies elementum id in lacus. Suspendisse tristique id diam sed suscipit. Mauris ac metus eget lorem imperdiet placerat ut id augue. Curabitur viverra mi arcu, et scelerisque ligula lobortis eu. Mauris mi turpis, gravida eu ex sed, sodales vulputate ipsum. Etiam sollicitudin eros at purus tempor, vel dictum ante porttitor. Ut dolor nisi, volutpat eu ipsum sed, convallis semper nibh.',
        },
        { 
            id: 10,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo. Nullam finibus gravida diam id euismod. Vivamus ac est venenatis, dapibus est at, venenatis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu bibendum nunc. Nulla facilisi. Donec a neque eget enim ultricies elementum id in lacus. Suspendisse tristique id diam sed suscipit. Mauris ac metus eget lorem imperdiet placerat ut id augue. Curabitur viverra mi arcu, et scelerisque ligula lobortis eu. Mauris mi turpis, gravida eu ex sed, sodales vulputate ipsum. Etiam sollicitudin eros at purus tempor, vel dictum ante porttitor. Ut dolor nisi, volutpat eu ipsum sed, convallis semper nibh.',
        },
        { 
            id: 11,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo. Nullam finibus gravida diam id euismod. Vivamus ac est venenatis, dapibus est at, venenatis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu bibendum nunc. Nulla facilisi. Donec a neque eget enim ultricies elementum id in lacus. Suspendisse tristique id diam sed suscipit. Mauris ac metus eget lorem imperdiet placerat ut id augue. Curabitur viverra mi arcu, et scelerisque ligula lobortis eu. Mauris mi turpis, gravida eu ex sed, sodales vulputate ipsum. Etiam sollicitudin eros at purus tempor, vel dictum ante porttitor. Ut dolor nisi, volutpat eu ipsum sed, convallis semper nibh.',
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
        console.log('Note View renders');
        console.log(this.state.notes)
        return(
            <div className="note-list">
            <div>inside map</div>
                {this.state.notes.map(note => (
                    <SingleNote key={note.id} note={note} />
                        
                    ))}

            </div>
        );
    }
}
function SingleNote({ note }) {
    console.log(note)
    const  {id, title, paragraph}  = note;
    return (
        <Link to={`/notes/${note.id}`}>
            <div className="single-note">
                <h2>{title}</h2>
                <div  className='paragraph'> {paragraph} </div>
            </div>
        </Link>
    );
}
export default NoteView;