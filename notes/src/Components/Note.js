import React, {Fragment} from 'react';
import {withRouter} from 'react-router'


class Note extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMoun(){
        const note = this.props.notes.find(
            note => `${note.id}` === this.props.match.params.id
            );
    }

    render() {
       console.log("params", this.props.match.params);
        return (
            <Fragment>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
                <h1>{note.title}</h1>
                <p>{note.textBody}</p>
                
            </Fragment>
        );
    }
};

export default withRouter(Note);