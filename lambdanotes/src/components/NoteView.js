import React from 'react';
import '../styles/App.css';


class Noteview extends React.Component {
    state = {
        show: false,
    };
     
    
    render() {

        const note = this.props.note;
        
        return ( 
            /*NoteDetails executes when show is true, otherwise */
            this.state.show
               ? <div>
                    <div>{props.note.title}</div>
                    <div>{props.note.paragraph}</div>
                </div>
               : 
                <div className="single-note" onClick={this.props.showNote(note.id)}>
                    <h4>{note.title}</h4>
                    <p>{note.paragraph}</p>
                  </div>
    
        );

    }

    
}

export default Noteview;
