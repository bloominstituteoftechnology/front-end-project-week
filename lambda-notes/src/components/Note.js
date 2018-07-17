import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import NewNote from './NewNote';
import App from '../App';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
            title: 'Note Title',
            body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
            edit: false
        }
    }

    componentDidMount() {
        const id = this.props.id;
        this.fetchNote(id);
    }

  	fetchNote = (id) => {
        id = parseInt(id, 10);
        const note = this.props.notes.filter(note => note.id === id)[0];
        // const notes = this.state.note;
        this.setState({
            note: note,
            id: id
        });
    }

    editNote = () => {
        this.setState({edit: true})
    }
    deleteNote = () => {
       this.setState({edit: true})
    }

    render() {
        return (
            this.state.edit ? (
                <NewNote
                    edit={true}
                    note={this.state.note}
                    title={this.state.title}
                    content={this.state.body}/>
            ) : (
                <Container>
                    <div className="edit-delete">
                        <Button><a onClick={this.editNote}>edit</a></Button>
                     <Button><a onClick={this.editNote}>delete</a></Button>
                    </div>
                    <h3 className="heading">{this.state.title}</h3>
                    <Row>
                        <Col sm="12">
                            <div  className="note-content">
                                {this.state.body}
                            </div>
                        </Col>
                    </Row>
                </Container>
            )
        )
    }
}

export default Note;
