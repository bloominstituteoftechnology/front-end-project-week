import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const ListItems = (props) => {
    return (
    <div>
        {props.todos.map(todo => {
          // return <li key={todo.id}>{todo.title}{todo.content}</li>;
          return (        
          <Card className="card">
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


  //add card structure to return statement above *****