import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import DeleteNote from "../modifyNote/DeleteNote";
export class IndividualNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: props.notes,
      match: props.match,
      isOpen: false,
      loading: false,
      success: false,
      redirect: false
    };
  }

  // componentDidUpdate() {
  //   if (this.state.redirect) {
  //     this.setState({ notes: this.props.notes });
  //   }
  // }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  approveModal = () => {
    this.setState({ loading: true });
    setTimeout(
      () =>
        this.setState({
          loading: false,
          success: true
        }),
      1000
    );
    setTimeout(
      () =>
        this.setState({
          isOpen: false,
          redirect: true
        }),
      3000
    );
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    console.log("Individual NOtes Props", this.props.notes);
    console.log("Individual Params Match", this.state.redirect);

    return (
      <div className="individualNote">
        {this.renderRedirect()}
        <Link to={`/edit/${this.state.match.params.id}`}>
          <button>edit</button>
        </Link>
        <button onClick={this.toggleModal}>Delete</button>

        <DeleteNote
          show={this.state.isOpen}
          onApprove={this.approveModal}
          onClose={this.toggleModal}
          deleteNoteHandler={this.props.deleteNoteHandler}
          deleteNumber={this.state.match.params.id}
        >
          {this.state.loading && "Loading..."}
          {this.state.success && "Success (make me green)"}
          {!this.state.success &&
            !this.state.loading &&
            "Here's some text for the modal"}
        </DeleteNote>

        <h2>{this.state.notes[this.state.match.params.id].title}</h2>
        <h2>{this.state.notes[this.state.match.params.id].description}</h2>
        <Link to={"/"}>Home</Link>
      </div>
    );
  }
}
