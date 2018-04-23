import React from 'react'
import Note from './Note';
import './NoteCard.css'
class NoteList extends React.Component {
    constructor(props) {
        super(props);

    }

        render(){
            return (
                <div>
                    <h3>Your Notes </h3>
                    <div className='NoteCardList'>
                        {this.props.notes.map((note) => {
                            return <Note title={note.title} content={note.content}/>
                        })}
                    </div>
                </div>
            );
        }
}
export default NoteList;