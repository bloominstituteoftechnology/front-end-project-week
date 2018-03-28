import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
    Row,
    Col, 
} from 'reactstrap';

import styled from 'styled-components';

const H3 = styled.h3`
    margin-top: 50px;
    margin-bottom: 30px;
    font-size: 1.4rem;
    font-weight: bold;
    opacity: 0.8;
`;

class Note extends React.Component {
    state = {
        Note: {},
    }

    render() {
        return (
            <React.Fragment>
                {(this.state.Note) ? (
                <Col xs="9">
                <Row>
                    <Col className="d-flex justify-content-end mr-5 mt-3">
                        <Link className= "mr-2" to={`/note/edit/${this.state.Note.id}`} >edit</Link>
                        <Link className= "ml-2" to={`/note/${this.state.Note.id}`} >delete</Link>                        
                    </Col>
                </Row>
                <Row className="mb-5" >
                    <Col >
                        <H3>{this.state.Note.title}</H3>
                        <p>{this.state.Note.content}</p>
                    </Col>
                </Row>
                </Col>
                ) : ('') }  
            </React.Fragment>
        );
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const notes = this.props.notes;
        const note = notes.filter(note => (note.id).toString() === id.toString())[0]
        this.setState({ Note: note })
    }
};


const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, {})(Note)