import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
      notes: this.props.notes,
      openModal: false
    };
  }
  componentDidMount() {
    let searchID;
    if (this.props.id) {
      searchID = this.props.id;
    } else {
      searchID = this.props.match.params.id;
    }

    const foundNote = this.state.notes.find(
      note => note.id === Number(searchID)
    );

    if (!foundNote) return;
    this.setState(() => ({ note: foundNote }));
  }

  openModalHandler = e => {
    this.setState({openModal: true})
  }

  closeModalHandler = e => {
    this.setState({openModal: false})
  }

  deleteDelayer = () =>{
    setTimeout(() => {
      this.props.history.push('/')
     }, 250) 
  }

  render() {
    return (
      <div className="notecard">

        <Link className="link-style" to={`/edit/${this.props.match.params.id}`}>
          <div>edit</div>
        </Link>

        <div className="myButton" onClick={this.openModalHandler}>delete</div>

        <div className={`${(this.state.openModal) ? "modal" : "modal-nodisplay"}`}>
          <div className="modal-content">
            <p>Are you sure you want to delete this?</p>
            
            <div className="form-button-group">
            
              <div onClick={this.deleteDelayer}>
            <button className="form-button" onClick={(e) => this.props.deleteHandler(e, this.props.match.params.id)}>Delete</button>
              </div>
            
            <button className="form-button" onClick={this.closeModalHandler}>No</button>
            </div>
          </div>
        </div>

        <div className="notecard-title">{this.state.note.title}</div>

        <div className="notecard-note">{this.state.note.note}</div>
      </div>
    );
  }
}
