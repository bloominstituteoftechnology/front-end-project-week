import React from 'react'
import Note from './Note';
import './NoteCard.css'
class NoteList extends React.Component {
    constructor(props) {
        super(props);

    }

        render(){
            return (
                <div className='NoteCardList'>
                        {this.props.notes.map((note) => {
                            return <Note title={note.title} content={note.content}/>
                        })}
                    </div>
            );
        }
}
export default NoteList;