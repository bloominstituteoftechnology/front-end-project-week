import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap';

import { getNotes } from '../actions'
import '../css/Notes.css';


class Notes extends Component {
    render() {
        return (
            <div className="notes">
                    {!this.props.notes ?
                        <h2> loading notes</h2>: null}
                    <div style={{display:'flex', flexWrap:'wrap'}}>
                    <Row >
                        {this.props.notes.map((note) =>{
                            return(
                                <Col xs='auto'>
                                    <NavLink to={`/notes/${note.id}`} style={{textDecoration:'none', color:'black'}}>
                                        <Card style={{display: 'flex'}}>
                                            <CardBody style={{border:'1px solid black'}} >
                                                <CardTitle style={{display: 'flex', justifyContent:'center'}}>{note.title}</CardTitle>
                                                <CardText style={{display:'flex', flexWrap:'wrap'}}>{note.body}</CardText>
                                            </CardBody>
                                        </Card>
                                    </NavLink>
                                </Col>
                        )})}
                        </Row>
                        </div>
            </div>
      );
    }
    componentDidMount() {
        this.props.getNotes();
    }
}
    
    const mapStateToProps = (state) => {
        return {
            notes:state.notes
        }
    }
    
  export default connect(mapStateToProps, {getNotes})(Notes);

