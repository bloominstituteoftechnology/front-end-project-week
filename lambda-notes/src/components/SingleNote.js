import React, { Component } from "react";
import axios from "axios";

class SingleNote extends Component {
  constructor() {
    super();
    this.state = {
      note: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    // axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`).then(res =>
    //   this.setState({
    //     note: res.data
    //   })
    // );
  }
  render() {
    return (
      <div>
        <h1>single note</h1>
      </div>
    );
  }
}

export default SingleNote;
