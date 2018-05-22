import React from "react";
import ModalComponent from "./ModalComponent";
import { Link } from "react-router-dom";
import { addNote, deleteNote, reorderState } from "../actions/action";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div> </div>)
    }
}
 
export default MainView;