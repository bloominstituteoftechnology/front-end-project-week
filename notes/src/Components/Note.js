import React, {Fragment} from 'react';
import {withRouter} from 'react-router'


class Note extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        const note = this.props.notes.find(
            note => `${note._id}` === this.props.match.params.id
          );
          console.log("params", this.props.match.params);
        return (
            <Fragment>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
                {/* <h1>{note.title}</h1>
                <p>{note.textBody}</p> */}
                
            </Fragment>
        );
    }
};

export default withRouter(Note);