import React from 'react';
import './css/note.css';
import { Card, CardText, CardBody,
  CardTitle } from 'reactstrap';
  import { Link } from 'react-router-dom';


  const Notes = props => {
    
    
    console.log("Props: ", props)
      return (
        <div className="itemFlex">
            {props.listOfNotes.map((item, i) => {
                return (
                    <Card className="note"  key={i}>
                        <Link to="/NoteView">
                            <CardBody>
                                <CardTitle className="cardTitle"><h4>{item.title}</h4></CardTitle>
                                    <hr />
                                <CardText className="cardBody">{item.comment}</CardText>
                            </CardBody>
                        </Link>
                    </Card>
                )
            })}
        </div>
    )
  }


export default Notes;