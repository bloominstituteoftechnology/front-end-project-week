import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col, Card, CardHeader, CardText, } from 'reactstrap';

// COMPONENTS
import NOTEVIEW from './NoteView';



export default class ListView extends Component {
    constructor (props){
        console.log('ListView props: ' + props);
        super(props)
        this.state={
            notes: []
        }
    }

    componentDidMount() {
    }
    render() {
        console.log(this.props.notes);
        return (
            <Container fluid="true" className="APP__LISTVIEW">
                <Row>
                    <Col xs="12"tag="h2" className="APP__LISTHEADER">Your Notes:</Col>
                </Row>
                <Row>
                    {this.props.notes.map((note, index) => {
                        return(
                            <Col xs='12' sm='6' md='6' lg='4'>
                                <Link className="text-muted" to={`/note/${note.id}`} component={NOTEVIEW}>
                                    <ANote key={index} note={note} />
                                </Link>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        );
    };
};

function ANote(props) {
    const { title, text } = props.note;
    return (
            <Card className="APP__NOTECARD" body outline color="secondary">
                <CardHeader tag="h5" className="text-left">{title}</CardHeader>
                <CardText className="text-left">{text}</CardText>
            </Card>
    )
};
