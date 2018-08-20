import React, {Component} from 'react';
import Note from './Note';

class NotesList extends Component {
    constructor(props){
        super(props);
        this.state = {
            notes: [],
        }
    }

    componentDidMount () {
        fetch ('https://raw.githubusercontent.com/DasGMA/front-end-project-week/master/lambda-notes/src/components/notes.json#')
          .then(response => response.json())
          .then((data) => {
            this.setState ({
              notes: data
            })
          })
          .catch(error => {
              console.log('There is a problem: ' , error)
          })
      }

    render() {
        return (
            <div className='notes-list'>
                {this.state.notes.map(note => 
                    <Note
                        key={note.id}
                        title={note.title}
                        content={note.content}
                    />
                )}
            </div>
        );

    }
}


export default NotesList;