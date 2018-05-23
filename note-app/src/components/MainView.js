import React from "react";
import ModalComponent from "./ModalComponent";
import { Link } from "react-router-dom";
import { addNote, deleteNote, reorderState } from "../actions/action";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

let dcolor = "red";
let dcomplete = "NOT COMPLETE";
let changeOrder = "Descending";
let originalNotes;

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
      isGoing: true,
      showAscending: true
    };
  }

  componentDidMount() {
    this.props.notes;
  }
  handleInputChange = e => {
    let name = e.target.name;
    this.setState({ [e.target.name]: e.target.value });

    console.log(e.target.name);
    console.log(e.target.value);
  };
  handleTag = (tname, index) => {
    this.setState({ tag: tname });
    this.props.addTag({ tag: tname }, index);
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  dynamicSort = property => {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function(a, b) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  };
  handleOrder = () => {
    let norder;
    if (this.state.showAscending === true) {
      norder = this.state.list
        .slice(0)
        .reverse()
        .map((note, i) => {
          return note;
        });
      this.setState({
        showAscending: !this.state.showAscending
      });
      this.setState({
        list: norder
      });
      this.props.reorderState(norder);
      this.setState({
        list: norder
      });
    } else {
      norder = this.state.list
        .slice(0)
        .reverse()
        .map((note, i) => {
          return note;
        });
      this.setState({
        showAscending: !this.state.showAscending
      });
      this.props.reorderState(norder);
      this.setState({
        list: norder
      });
    }

    console.log("norder: ", norder);
  };

  render() {
    let tempVal;
    console.log("notes length: ", this.props.notes.length);
    console.log("list is: ", this.state.list);
    let descI = this.props.notes.length;
    return (
      <div>
        <div>
          {this.state.showAscending === true
            ? (changeOrder = "DESCENDING")
            : (changeOrder = "ASCENDING")}
        </div>
        <div>
          <h4>Your Notes:</h4>
          <span>
            {/* <h5>
              Change Order
              <button onClick={this.handleOrder}>{changeOrder}</button>
            </h5> */}
          </span>
        </div>

        {this.state.showAscending ? (
          <div>
            {this.state.list.map((note, i) => {
              tempVal = i;
              {
                note.check === false ? (dcolor = "red") : (dcolor = "blue");
              }
              {
                note.check === false
                  ? (dcomplete = "NOT COMPLETE")
                  : (dcomplete = "COMPLETED");
              }
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
        ) : (
          <div>
            {this.state.list.map((note, i) => {
              tempVal = i;
              {
                note.check === false ? (dcolor = "red") : (dcolor = "blue");
              }
              {
                note.check === false
                  ? (dcomplete = "NOT COMPLETE")
                  : (dcomplete = "COMPLETED");
              }
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
                    <ModalComponent index={i} color={dcolor} />
                    <div>
                      <span>{note.note}</span>
                    </div>
                  </h6>
                </Link>
              );
            })}
          </div>
        )}
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
