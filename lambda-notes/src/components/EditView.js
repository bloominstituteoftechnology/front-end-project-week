import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateReq } from '../actions';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import axios from 'axios';

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
        if(!this.state.note) return <img src={logo} className="App-logo" alt="logo" style={{margin: "auto", height: "50%"}}/>;

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
                <Link to={`/note/${this.state.note["_id"]}`}><button onClick={() => this.props.handleUpdate(this.props.match.params.id)}>Update</button></Link>
                </div>
            </div>
        );
    }
};

export default EditView;