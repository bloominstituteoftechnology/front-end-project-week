import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import { Link } from 'react-router-dom'
import Markdown from 'markdown-to-jsx';
import { CSVLink, CSVDownload } from 'react-csv';

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
                                    <div><Markdown>{e.text}</Markdown></div>
                                </CardBody>
                            </Card>
                        </Link>
                    );
                })}
            </div>
            <h6><CSVLink className="download-link" seperator="," data={props.notes.notes} target="_blank">Download</CSVLink></h6>
        </div>
    );
}