import React from 'react';
import './NoteView.css';
import { Link } from 'react-router-dom';

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
                        <Link to={{pathname: `/edit/${this.props.note._id}`, state:this.props.note}}>
                            <h4>edit</h4>
                        </Link>
                        <Link to='/'>
                            <h4>delete</h4>
                        </Link>
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