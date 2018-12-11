import React from 'react';
import NoteCard from './NoteCard'
class NoteList extends React.Component {
    render(){
        return(
            <div className="note-list">
                <div className="btn-section">
                    <i className="fas fa-file-export export" onClick={() =>this.props.export()}>Export As CSV</i>
                    <div className="size-btns">
                        <i onClick={() => this.props.changeSize(true)} className="fas fa-th-large"></i>
                        <i onClick={() => this.props.changeSize(false)} className="fas fa-th"></i>
                    </div>
                </div>
                {this.props.notes.map(note => {
                    return (<NoteCard 
                        size={this.props.size}
                        id={note.id} 
                        key={note.id} 
                        title={note.title} 
                        textBody={note.textBody} 
                        />)
                })}
            </div>
        );
    }
}

export default NoteList;