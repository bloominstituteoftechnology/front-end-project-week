import React from "react";
import ModalComponent from "./ModalComponent";
import { Link } from "react-router-dom";
import { addNote, deleteNote, addTag, reorderState } from "../actions/action";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
