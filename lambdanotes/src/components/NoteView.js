import React from 'react';
import '../styles/App.css';
import NoteDetail from './NoteDetail';

class Noteview extends React.Component {
    state = {
        show: false,
    };
     
    showNote= (e) => {
        this.setState({show: true})

    }
    render() {
        const note = this.props.note;
        return ( 
            /*NoteDetails executes when show is true, otherwise */
            this.state.show
                ? <NoteDetail note={note}/> 
                : <div className="single-note" onClick={this.showNote}>
                    <h4>{note.title}</h4>
                    <p>{note.paragraph}</p>
                  </div>
    
        );

    }

    
}

export default Noteview;
