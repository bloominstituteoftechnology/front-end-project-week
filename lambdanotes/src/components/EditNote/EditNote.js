import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './EditNote.css';

class EditNote extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         title:`${props.title}`,
    //         content:`${props.content}`
    //     }    
    // }
    render() {
        return(
            <div className='edit-container'>
                <h2>Edit Note:</h2>
                <form>
                    <input
                        className='edit-title-input'
                        onChange={this.props.handleInputChange}
                        placeholder="Note Title"
                        value={this.props.title}
                        name='title'
                    />
                    <input
                        className='edit-content-input'
                        onChange={this.props.handleInputChange}
                        placeholder="Note Content"
                        value={this.props.content}
                        name='content'
                    />
                </form>
                <Link to ='/'>
                    <button 
                        onClick={() => this.props.editNote(this.props.location.state.id)} 
                        className='save-button'
                        >Edit Note
                    </button>
                </Link>
            </div>
        );
    }
};

export default EditNote;