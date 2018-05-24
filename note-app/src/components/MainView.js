import React from "react";
import ModalComponent from "./ModalComponent";
import { Link } from "react-router-dom";
import { addNote, deleteNote, reorderState } from "../actions/action";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";


const noteView = {
  display: "inline-flex",
  backgroundColor: "white",
  width: "22%",
  marginLeft: "3%",
  marginRight: "3%",
  border: "1px solid gray",
  padding: 10,
  height: 200,
  cursor: "pointer",
  marginTop: 10,
  marginBottom: 10,
  overflow: "hidden"
};

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderB: true,
      modal: false,
      list: this.props.notes,
  
    };
  }

  componentDidMount() {
    this.props.notes;
  }
  handleInputChange = e => {
    let name = e.target.name;
    this.setState({ [e.target.name]: e.target.value });

  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div>
        <div>
          <h4>Your Notes:</h4>
        </div>
        <div>
          {this.state.list.map((note, i) => {
            return (
              <Link style={noteView} to={`/notes/view/${i}`} key={note + i}>
                {" "}
                <h6>
                  <span>
                    {" "}
                    <span>
                      {note.title} {`  `}
                    </span>
                  </span>
                  <ModalComponent index={i} />
                  <div>
                    <span>{note.note}</span>
                  </div>
                </h6>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapDispatchToProps, {
  addNote,
  deleteNote,
  reorderState
})(MainView);
