import React, {Component} from 'react';
import axios from 'axios';

//import Note from './Note';
import NoteCard from './NoteCard';


class NoteList extends Component {
/*    render() {
        return ( 
            <div className = "NoteList" >
            <h1> Lambda Notes </h1> 
            <ul> 
            {this.props.notes.map(note => {
                return (
                    <Note 
                        tags={note.tags}
                        title={note.title}
                        textBody={note.textBody}
                    />
                );
            })} 
            </ul> 
            </div>
        );
    }
}

Note.defaultProps = {
    notes: []
};
 */

constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

componentDidMount() {
  axios
  .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => {
      this.setState(() => ({ notes: response.data }));
    })
    .catch(error => {
      console.error('Error getting notes data.', error);
    });
}

  render() {
    return (
      <div>
        {this.state.notes.map(note => (
            <NoteCard key={note._id} note={note} />
        ))}
      </div>
    );
  }
}

export default NoteList;
