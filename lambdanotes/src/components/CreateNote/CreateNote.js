import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './CreateNote.css';
class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:'',
            content:''
        };
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    render() {
        return (
            <div className='create-container'>
                <h2>Create New Note:</h2>
                <form>
                    <input
                        className='create-title-input'
                        onChange={this.handleInputChange}
                        placeholder="Note Title"
                        value={this.state.title}
                        name='title'
                    />
                    <input
                        className='create-content-input'
                        onChange={this.handleInputChange}
                        placeholder="Note Content"
                        value={this.state.content}
                        name='content'
                    />
                </form>
                <Link to ='/'>
                    <button className='save-button'>Save Note</button>
                </Link>
            </div>
        );
    }
}

export default CreateNote;