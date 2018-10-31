import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {},
            showModal: false,
        };
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        axios 
        .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then(response => this.setState({ note: response.data }))
        .catch(error => console.log(error))
    }
        
    handleToggleModal() {
        this.setState({ showModal: !this.state.showModal });
    };
    
    render() {
        return (
            <div className="note-container">
                <div className="link-container">
                    <div className="edit">
                        <Link to={`/Edit/${this.props.match.params.id}`}>
                            edit
                        </Link>
                    </div>
                    <div className="delete">
                        <Link to="/Modal" onClick={this.handleToggleModal}>
                            delete
                        </Link>
                    </div>
                </div>
                <div className="body-container">
                    <h3>{this.state.note.title}</h3>
                    <p>{this.state.note.textBody}</p>
                </div>
            </div> 
        )
    };
};
export default Note;





