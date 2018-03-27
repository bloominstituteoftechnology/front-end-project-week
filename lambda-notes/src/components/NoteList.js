import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { } from '../actions';
import { Card, CardBody, CardTitle, CardText, Row, Col} from 'reactstrap';
import { Fragment } from 'react';
import SingleNoteView from './SingleNoteView';
import { Link } from 'react-router-dom';


const StyledNoteList = styled.div`
    width: 70%;
    background: lavender;

    .note-list__header {
        margin-top: 20px;
        margin-left: 25px;
        margin-bottom: 20px;
        font-weight: bold;

        width: 20%;
    }

    .note-list__right {
    }

    .card-title {
        padding-bottom: 8px;
        border-bottom: 2px solid grey;
        font-size: 16px;
        width: 
    }

    .card-text {
        font-size: 12px;
    }

    .link {
    }

`;

class NoteList extends Component {

    render() {
        return (
        <StyledNoteList>
        <div className="note-list__header"> Your Notes: </div>
        <div className="note-list__right">
        <Row className="d-flex flex-wrap mx-2">
        
            {this.props.notes.map(note => {
                return (
                    <Link className="link" to={`/single-note-view/${note.id}`} style={{ textDecoration: 'none' }}>

                    <Col sm="4" className="mb-3" key={note.id}>
                        <Card>
                            <CardBody key={note.id}>
                                <CardTitle className="card-title"><b>{note.title}</b></CardTitle>
                                <CardText className="card-text">{note.text}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    </Link>
                );
            })}
        </Row>
        </div>
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