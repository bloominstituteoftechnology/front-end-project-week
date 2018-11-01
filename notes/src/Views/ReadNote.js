import React from "react";
import { Link } from "react-router-dom";

import DeleteModal from './DeleteModal';

import '../styles/Styles.css';

class ReadNote extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalToggle: false
    }
  }

  deleteModalToggleButton = () => {
    this.setState({ modalToggle: !this.state.modalToggle });
  }

  render() {
    console.log(this.props)
    return (
      <div className="full-page-note">
        <div>
          <Link to="/edit" className='edit-text-button'>edit</Link>
          <span className='delete-text-button' onClick={this.deleteModalToggleButton}>
            delete
          </span>
          <DeleteModal 
            modalState={this.state.modalToggle} 
            deleteNote={this.props.deleteNote} 
            currentId={this.props._id}
            modalToggle={this.deleteModalToggleButton}
          />
        </div>
        <h1>{this.props.title}</h1>
        <p>{this.props.textBody}</p>
      </div>
    );
  }
}

export default ReadNote;
