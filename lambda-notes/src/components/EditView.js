import React, { Component } from 'react';
import axios from 'axios';
import logo from '../logo.svg';

const URL = 'https://killer-notes.herokuapp.com/note';

class EditView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const promise = axios.get(`${URL}/get/${id}`);
        promise.then(({data}) => {
          console.log(data);
          this.setState({note: data});
        })
        .catch((error) => this.setState({error}));
    }

    render() {
        if(!this.state.note) {
            return <img src={logo} className="App-logo" alt="logo"/>;
        }

        return (
            <div className="EditView-container">
                <div className="EditView-header">
                    <h2>Edit Note:</h2>
                </div>
                <form className="EditView-content" onSubmit={this.props.handleUpdate}>
                    <input
                        name="title"
                        placeholder="Note Title"
                        value={this.props.title === "" ? this.state.note.title : this.props.title}
                        onChange={this.props.handleChange}
                    />
                    <textarea
                        name="textBody"
                        placeholder="Note Content"
                        value={this.props.textBody === "" ? this.state.note.textBody : this.props.textBody}
                        onChange={this.props.handleChange}
                    />
                </form>
                <div className="EditView-buttons">
                    <button onClick={() => this.props.handleUpdate(this.props.match.params.id)}>Update</button>
                </div>
            </div>
        );
    }
};

export default EditView;