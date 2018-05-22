import React from 'react';
import './css/note.css';
import { Card, CardText, CardBody,
  CardTitle } from 'reactstrap';
//   import CreateNote from './CreateNote';

  const Notes = props => {
      console.log("Props, ", props)
    return (
        <div className="itemFlex">
            {props.notesState.map(item => {
                return (
                    <Card className="note"  key={item.id}>
                        <CardBody>
                            <CardTitle>{item.title}</CardTitle>
                            <hr />
                            <CardText>{item.comment}</CardText>
                        </CardBody>
                    </Card>
                )
            })}
        </div>
    )
  }
  
 
export default Notes;