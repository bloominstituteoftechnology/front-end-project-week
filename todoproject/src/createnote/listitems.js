import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const ListItems = (props) => {
    return (
    <div>
        {props.todos.map(todo => {
          return (        
          <Card className="card" key={todo.title}>
            <CardBody>
                <CardTitle className="cardtitle">{todo.title}</CardTitle>
                <CardText className="cardtext">{todo.content}</CardText>
            </CardBody>
         </Card>
          )
        })}
    </div>
    );
  };
  
  export default ListItems;

