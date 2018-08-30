import React from 'react';
//import axios from 'axios';
import { Card, CardText, CardBody, CardTitle, Col} from 'reactstrap';
import Note from './note';
import './listnotes.css';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

const ListNotes = props => {
    return (
    <div>

           
           {props.notes.map((note) => {
            return (
                <Col sm='4'>
                <h3>
                <div className="Character-Wrapper">
                {console.log(note)}
                    <Link to= {`/notes/${note.id}`}>
                        <Card>
                          <CardBody>
                            <CardTitle>{note.title}</CardTitle>
                            <CardText>{note.content}</CardText>
                          </CardBody>
                        </Card>
                    </Link>
                    <Route path={`notes/${note.id}`} render={(note) => <Note {...note}/>}/>
                    </div>
                </h3>
                </Col>
            )
        })}  
           
    
        
    </div>
    )
}


export default ListNotes;