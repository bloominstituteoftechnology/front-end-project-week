import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { } from '../actions';
import { Card, CardBody, CardTitle, CardText, Row, Col} from 'reactstrap';


const StyledNoteList = styled.div`
    width: 80%;
    background: white;

`;

class NoteList extends Component {

    render() {
        return (
        <StyledNoteList>
        <div className="NoteList__header"> Your Notes: </div>
        <Row className="d-flex flex-wrap mx-2">
        
            {this.props.notes.map(note => {
                return (
                    <Col sm="4" className="mb-3" key={note.id}>
                        <Card>
                            <CardBody key={note.id}>
                                <CardTitle><b>{note.title}</b></CardTitle>
                                <CardText>{note.text}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                );
            })}
        </Row>
        </StyledNoteList>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        notes: state
    };
};

export default connect(mapStateToProps, {})(NoteList)