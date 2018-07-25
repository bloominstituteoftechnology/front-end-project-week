import React from 'react';
import './NoteView.css';

class NoteView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
        };
    };

    render() {
        console.log(this.props.note);
        return (
            <div className='note'>
                <div className='note-header'>
                        <h3>{this.props.note.title}</h3>
                    <div className='actions'>
                        <h4>edit</h4>
                        <h4>delete</h4>
                    </div>
                </div>   
                <div className='content'>
                    <p>{this.props.note.textBody}</p>
                </div>
            </div>
        );
    };
};
 
export default NoteView;