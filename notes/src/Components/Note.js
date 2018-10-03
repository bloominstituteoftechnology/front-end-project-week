import React, { Fragment } from "react";
import { withRouter } from "react-router";
import axios from "axios";

class Note extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        note: []
      }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`)
    .then(response => {
      this.setState({note: response.data});
  })
  .catch(err => {
      console.log("error", err);
  });
}

  render() {
    
    
    console.log(this.props);
    return (
      <Fragment>
        <div>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
          <h1>{this.state.note.title}</h1>
          <p>{this.state.note.textBody}</p>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Note);