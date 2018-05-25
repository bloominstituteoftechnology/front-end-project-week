import React from 'react';
import {
    Card, CardBody,
    CardTitle
} from 'reactstrap';
import { Link } from 'react-router-dom'
import Markdown from 'markdown-to-jsx';

export const ListComponent = (props) => {
    return (
        <li data-id={props.index}
            key={props.index}
            draggable='true'
            onDragEnd={props.onDragEnd.bind(this)}
            onDragStart={props.onDragStart.bind(this)}>
            <Link to={`/notes/${props.item.id}`} key={props.item.id} className="noDecoration">
                <Card key={props.item.i}>

                    <CardBody>
                        <CardTitle>{props.item.title}</CardTitle>
                        <div className="note-list-body"><Markdown>{props.item.text}</Markdown></div>
                    </CardBody>

                </Card>
            </Link>
        </li >
    );
}