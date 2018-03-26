import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../actions';
import { Card, CardBody, CardTitle, CardText, Button, Row, Col} from 'reactstrap';

class NoteList extends Component {

    handleDelete = (id) => {
        return this.props.deleteNote(id);
    }
    render() {
        return (
        <div>
            {this.props.notes.map(note => {
                return (
                    <Row className="d-flex justify-content-center flex-wrap">
                      <Col sm="6">
                        <Card>
                            <CardBody key={note.id}>
                                <CardTitle><b>{note.title}</b></CardTitle>
                                <CardText>{note.text}</CardText>
                                <Button color="primary" onClick={() => this.handleDelete(note.id)}> Delete </Button>
                            </CardBody>
                        </Card>
                      </Col>
                    </Row>
                );
            })}
        </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        notes: state
    };
};

export default connect(mapStateToProps, { deleteNote })(NoteList)