import React from "react";
import { Link } from "react-router-dom";

import DeleteModal from './DeleteModal';

class ReadNote extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalToggle: false
    }
  }

  deleteButtonHandler = e => {
    this.setState({ modalToggle: !this.state.modalToggle });
  }

  render() {
    console.log(this.props)
    return (
      <div className="full-page-note">
        <div>
          <Link to="/edit">edit</Link>
          <span className='delete-button' onClick={this.deleteButtonHandler}>delete</span>
          <DeleteModal modalState={this.state.modalToggle} />
        </div>
        <h1>{this.props.title}</h1>
        <p>{this.props.textBody}</p>
      </div>
    );
  }
}

export default ReadNote;
