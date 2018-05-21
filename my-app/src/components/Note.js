import React from 'react';
import './note.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Notes = () => {
    return(
        <div className="note">
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>Note title</CardTitle>
                        <hr />
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}
 
export default Notes;