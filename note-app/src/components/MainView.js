import React from "react";
import ModalComponent from "./ModalComponent";
import { Link } from "react-router-dom";
import { addNote, deleteNote, reorderState, addTag } from "../actions/action";
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
const headerStyle = {
  fontWeight: "bold",
  marginLeft: "3%",
  marginTop: 10,
  display: "inline-flex"
};
const mainStyle = {
  marginLeft: "2%",
  paddingTop: 50
};
const noteSt = {
  display: "inline-flex",
  width: "100%",
  paddingBottom: 8,
  fontWeight: "bold",
  fontSize: 20
};
const tagStyle = {
  cursor: "context-menu",
  marginLeft: 20,
  paddingLeft: 10,
  paddingRight: 10,
  backgroundColor: "beige",
  border: "2px solid yellow"
};
const aprompt = {
  width: "400%",
  padding: 100
};
const iStyle = {

  marginTop: 10
};
const noteStyle = {
  margin: 10
};
const descendButton = {
  marginLeft: "54%",
  color: "black",
  fontWeight: "bold",
  marginRight: 0
};
const desButtonTwo = {
  marginLeft: "3%",
  cursor: "pointer"
};
const desButtonThree = {
  marginLeft: "4%",
  cursor: "pointer"
};
let tempVal;
const hide = {
  display: "none"
};

let defaultColor = "red";
let defaultComplete = "NOT COMPLETE";
let changeOrder = "Descending";
let originalNotes;

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderB: true,
      modal: false,
      list: this.props.notes,
      tag: "",
      isGoing: true,
      showAscending: true,
      orderTag: false
    };
  }

  componentDidMount() {
    this.props.notes;
  }
  handleInputChange = e => {
    let name = e.target.name;
    this.setState({ [e.target.name]: e.target.value });
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
  sortOrder = item => {
    var sortOrder = 1;
    if (item[0] === "-") {
      sortOrder = -1;
      item = item.substr(1);
    }
    return function(a, b) {
      var result = a[item] < b[item] ? -1 : a[item] > b[item] ? 1 : 0;
      return result * sortOrder;
    };
  };
  handleOrder = () => {
    let dir;
    if (this.state.showAscending === true) {
      dir = this.state.list
        .slice(0)
        .reverse()
        .map((note, i) => {
          return note;
        });
      this.setState({
        showAscending: !this.state.showAscending
      });
      this.setState({
        list: dir
      });
      this.props.reorderState(dir);
      this.setState({
        list: dir
      });
    } else {
      dir = this.state.list
        .slice(0)
        .reverse()
        .map((note, i) => {
          return note;
        });
      this.setState({
        showAscending: !this.state.showAscending
      });
      this.props.reorderState(dir);
      this.setState({
        list: dir
      });
    }

  };
  handleTag = () => {
    if (this.state.orderTag === false) {
      originalNotes = this.state.list.map(note => {
        return note;
      });
      this.setState({
        orderTag: !this.state.orderTag
      });
      console.log("original notes value: ", originalNotes);

      let tagArr = this.state.list.sort(this.sortOrder("tag"));
      console.log("New ARrray is: ", tagArr);
      this.setState({
        list: tagArr
      });
      this.props.reorderState(tagArr);
    } else {
      this.setState({
        orderTag: !this.state.orderTag
      });
      this.setState({
        list: originalNotes
      });
      this.props.reorderState(originalNotes);
    }
  };
  render() {
    let descI = this.props.notes.length;
    return (
      <div style={mainStyle}>
        <div style={hide}>
          {this.state.showAscending === true
            ? (changeOrder = "DESCENDING")
            : (changeOrder = "ASCENDING")}
        </div>
        <div>
          <h4 style={headerStyle}>Your Notes:</h4>
          <span>
            <h5 style={descendButton}>
              Change Order
              <button style={desButtonTwo} onClick={this.handleOrder}>
                {changeOrder}
              </button>
            </h5>
          </span>
          <span>
            <h5 style={descendButton}>
              Order by Tag
              <button style={desButtonThree} onClick={this.handleTag}>
                Enable/Disable
              </button>
            </h5>
          </span>
        </div>

        {this.state.showAscending ? (
          <div>
            {this.state.list.map((note, i) => {
              tempVal = i;
              {
                note.check === false
                  ? (defaultColor = "red")
                  : (defaultColor = "blue");
              }
              {
                note.check === false
                  ? (defaultComplete = "NOT COMPLETE")
                  : (defaultComplete = "COMPLETED");
              }
              return (
                <Link to={`/notes/view/${i}`} style={noteView} key={note + i}>
                  {" "}
                  <h6>
                    <span style={noteSt}>
                      {" "}
                      <span style={{ color: defaultColor }}>
                        {note.title} {`  `}
                      </span>
                    </span>
                    <ModalComponent index={i} color={defaultColor} />
                    <div style={noteStyle}>
                      <span style={{ color: defaultColor }}>{note.note}</span>
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
                note.check === false
                  ? (defaultColor = "red")
                  : (defaultColor = "blue");
              }
              {
                note.check === false
                  ? (defaultComplete = "NOT COMPLETE")
                  : (defaultComplete = "COMPLETED");
              }
              return (
                <Link to={`/notes/view/${i}`} style={noteView} key={note + i}>
                  {" "}
                  <h6>
                    <span style={noteSt}>
                      {" "}
                      <span style={{ color: defaultColor }}>
                        {note.title} {`  `}
                      </span>
                    </span>
                    <ModalComponent index={i} color={defaultColor} />
                    <div style={noteStyle}>
                      <span style={{ color: defaultColor }}>{note.note}</span>
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
  reorderState,
  addTag
})(MainView);
