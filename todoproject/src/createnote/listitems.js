import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const ListItems = (props) => {
    return (
    <div>
        {props.todos.map(todo => {
          return (
          <Link to={`/ViewNote/${todo._id}`}>     
          <Card className="card" key={todo.title}>
            <CardBody>
                <CardTitle className="cardtitle">{todo.title}</CardTitle>
                <CardText className="cardtext">{todo.content}</CardText>
            </CardBody>
         </Card>
         </Link>
          )
        })}
    </div>
    );
  };
  
  export default ListItems;