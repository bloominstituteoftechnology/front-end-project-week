import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './CreateNote.css';
class CreateNote extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         title:'',
    //         content:''
    //     };
    // }

    

    render() {
        return (
            <div className='create-container'>
                <h2>Create New Note:</h2>
                <form>
                    <input
                        className='create-title-input'
                        onChange={this.props.handleInputChange}
                        placeholder="Note Title"
                        value={this.props.title}
                        name='title'
                    />
                    <input
                        className='create-content-input'
                        onChange={this.props.handleInputChange}
                        placeholder="Note Content"
                        value={this.props.content}
                        name='content'
                    />
                </form>
                <Link to ='/'>
                    <button onClick={() => this.props.addNote()} className='save-button'>Save Note</button>
                </Link>
            </div>
        );
    }
}

export default CreateNote;