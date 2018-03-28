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
    height: 700px;

    .note-list__header {
        margin-top: 20px;
        margin-left: 25px;
        margin-bottom: 20px;
        font-weight: bold;

        width: 20%;
    }

    .note-list__right {
    }

    .row {
        margin-left: 1.6%;
        margin-right: 1.6%;
    }

    .card {
        width: 100%;
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
        console.log('NoteList this.props', this.props)
        return (
        <StyledNoteList>
        <div className="note-list__header"> Your Notes: </div>
        <div className="note-list__right">
        <Row className="row d-flex flex-wrap">        
            {this.props.notes.map(note => {
                return (
                    <Col sm="4" className="mb-3" key={note.id}>
                        <Link  className="link" to={`/single-note-view/${note.id}`} style={{ textDecoration: 'none' }}>
                        <Card>
                            <CardBody className="card" key={note.id}>
                                <CardTitle className="card-title"><b>{note.title}</b></CardTitle>
                                <CardText className="card-text">{note.text}</CardText>
                            </CardBody>
                        </Card>
                        </Link>
                    </Col>
                    
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
        notes: state.notes
    };
};

export default connect(mapStateToProps, {})(NoteList)