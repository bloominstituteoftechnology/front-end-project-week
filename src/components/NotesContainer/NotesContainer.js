import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './NotesContainer.css';

class NotesContainer extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            notes: []
        }
    };

    componentWillMount() {
        const token = localStorage.getItem('jwt');
        const requestOptions = {
            headers: {
                Authorization: token
            }
        }
        axios.get(`${process.env.sr}/${localStorage.getItem('userId')}/${process.env.ns}`, requestOptions)
            .then(response => {
                this.setState({ username: response.data.username, notes: response.data.notes });
            })
            .catch(error => {
                console.log(`Error: ${error}`)
            })
    };

    componentWillReceiveProps() {
        const token = localStorage.getItem('jwt');
        const requestOptions = {
            headers: {
                Authorization: token
            }
        }
        axios.get(`${process.env.sr}/${localStorage.getItem('userId')}/${process.env.ns}`, requestOptions)
            .then(response => {
                this.setState({ username: response.data.username, notes: response.data.notes });
            })
            .catch(error => {
                console.log(`Error: ${error}`)
            })
    };

    render() {
        if (!this.state.username) {
            return <div className='loading'><h4>Loading notes information...</h4></div>
        }
        return (
            <div className='notesContainer'>
                <h4>{this.state.username} Notes:</h4>
                {this.state.notes.length === 0 ? <h5 className='empty'>You currently do not have any notes. Click on the create note button to create one.</h5> : null}
                <div className='notes'>
                    {this.state.notes.length > 0 ?
                        this.state.notes.map(note => {
                            return (
                                <Link className='link' key={note._id} to={`/${localStorage.getItem('userId')}/${process.env.ns}/${note._id}`}>
                                    <Card>
                                        <CardBody>
                                            <CardTitle>{note.title}</CardTitle>
                                            <CardText>{note.text}</CardText>
                                        </CardBody>
                                    </Card>
                                </Link>
                            )
                        }) : null}
                </div>
            </div>
        )
    }
};

export default withRouter(NotesContainer); 