import React from 'react';
//import axios from 'axios';
import { Card, CardText, CardBody, CardTitle, Col} from 'reactstrap';
import Note from './note';
import './listnotes.css';
import {Route} from 'react-router-dom';
import {Link, Redirect} from 'react-router-dom';

const ListNotes = props => {
    return (
    <div className = "d-flex flex-wrap">
    {console.log(props.deletenote)}
           
           {props.notes.map((note) => {
            return (
                <Col sm='4'd-flex flex-wrap>
                <h3>
                <div className="Character-Wrapper ">
                {console.log(note)}
                    <Link to= {
                        {
                            pathname: `/notes/${note.id}`,
                            state: {note},
                            deletenote: props.deletenote,
                            editnote: props.editnote
                        } 
                    }>
                        <Card>
                          <CardBody>
                            <CardTitle>{note.title}</CardTitle>
                            <CardText>{note.content}</CardText>
                          </CardBody>
                        </Card>
                        
                        
                    </Link>
                    </div>
                </h3>
                </Col>
            )
        })}  
           
    
        
    </div>
    )
}


export default ListNotes;

// pathname:`/notes/${note.id}`,
//                         state: {}