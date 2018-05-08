import React, { Component } from 'react';
import { connect } from 'react-redux';


import '../App.css';
import { updateNote } from '../Action';

class EditNote extends Component {

    state = {
        id: '',
        title: '',
        content: '',
    }

    handleEditChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleEditSubmit = (id) => {
        const { title, content } = this.state;

        this.props.updateNote({ id, title, content });
        this.setState({name: '', age: '', email: '', id: '',});
        this.props.history.push('/');
    }


    render() {
        return(

            <div className="createPage">
                <h3 className="create-logo"> Edit Note: </h3>
                <input className="title-text-box"
                    onChange={this.handleEditChange}
                    value={this.state.title}
                    type="text"
                    name="title"
                    placeholder="Edit Note Title"
                    />
                    
                <textarea className="content-box"
                    onChange={this.handleEditChange}
                    value={this.state.content}
                    type="text"
                    name="content"
                    placeholder="Edit Note Content"
                    />

                    <button onClick={() => this.handleEditSubmit(this.props.note.id)} className="save-button">Update</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        note: state.note,
    }
}


export default connect(mapStateToProps, { updateNote })(EditNote);