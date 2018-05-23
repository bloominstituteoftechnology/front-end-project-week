import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import { Link } from 'react-router-dom'
import Markdown from 'markdown-to-jsx';

export default (props) => {
    // console.log("props", props)
    console.log(props)
    return (
        <div className="notelist">
            <h3>Your Notes:</h3>
            <div className="nlist-wrapper">
                {props.notes.notes.map((e, i) => {
                    return (
                        <Link to={`/notes/${e.id}`} key={e.id} className="noDecoration">
                            <Card key={e.i}>
                                <CardBody>
                                    <CardTitle>{e.title}</CardTitle>
                                    <CardText><Markdown>{e.text}</Markdown></CardText>
                                </CardBody>
                            </Card>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}