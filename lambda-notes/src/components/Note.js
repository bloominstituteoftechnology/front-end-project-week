import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import NewNote from './NewNote';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
            title: '',
            content: '',
            edit: false,
            deleted: false
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id);
    }

    fetchNote = (id) => {
        axios
            .get(`http://localhost:5000/note/${id}`)
            .then( res => {
                this.setState({
                    note: res.data, 
                    title: res.data.title, 
                    content: res.data.content
                });
            })
            .catch( err => {
                console.log(err);
            })
    }

    editNote = () => {
        this.setState({edit: true})
    }

    deleteNote = () => {
        axios
            .delete(`http://localhost:5000/note/${this.state.note.id}`)
            .then( res => {
                this.setState({deleted: true});
            })
            .catch( err => {
                console.log(err);
            })
    }

    render() { 
        return (
            this.state.deleted ? (
                <Redirect to="/"/>
            ) : (
                this.state.edit ? (
                    <NewNote 
                        edit={true} 
                        note={this.state.note} 
                        title={this.state.title}
                        content={this.state.content}/>
                ) : (
                    <Container>
                        <div className="edit-delete">
                            <a onClick={this.editNote}>edit</a>
                            <a onClick={this.deleteNote}>delete</a>
                        </div>
                        <h3 className="heading">{this.state.title}</h3>
                        <Row>
                            <Col sm="12">
                                <div  className="note-content">
                                    {this.state.content}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                )
            )
        )
    }
}
 
export default Note;