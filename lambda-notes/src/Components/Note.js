import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Note = props => {
    return (
        <div>
            <div>
                <Link to={"/editNote"}>
                    <button>edit</button>
                </Link>
                <br />
                <button>delete</button>

            </div>
            <div>
                TITLE:{props.noteEntries[1].title}
                <br />
                TEXT: {props.noteEntries[1].textBody}
            </div>
        </div>
    )
}

export default Note