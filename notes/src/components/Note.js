import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const NoteCard = () => {
    return (
      <div>
        <Link to='./NoteView'>   
            <Card className='Note-Card'>
                <CardBody>
                    <CardTitle className='Card-Title'>Note Title</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.
                    </CardText>
                </CardBody>
            </Card>
        </Link>     
      </div>
    );
};

export default NoteCard;