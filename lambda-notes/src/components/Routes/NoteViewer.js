import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import withStyles from "@material-ui/core/styles/withStyles";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import { deleteNote } from "../../actions/index";
import Fade from "react-reveal";

import javascriptStyles from "../../assets/jss/material-kit-react/views/componentsSections/javascriptStyles";

import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody";
import CardFooter from "../Card/CardFooter";
import Button from "../CustomButtons/Button.jsx";
import EditNote from "./EditNote";

const Main = styled.div`
  padding-left: 32%;
  padding-top: 5%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

const NoteContainer = styled.div`
margin auto;
width: 100%;
`;

function Transition(props) {
  return <Slide direction='down' {...props} />;
}

class NoteViewer extends Component {
  state = {
    note: {},
    title: "",
    textBody: "",
    _id: null
  };

  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  handleClosePopover(state) {
    this.setState({
      [state]: false
    });
  }
  handleClickButton(state) {
    this.setState({
      [state]: true
    });
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const note = this.props.notes.filter(note => id === note._id.toString());
    this.setState({
      note: note[0],
      _id: note._id,
      title: note.title,
      textBody: note.textBody
    });
  }

  render() {
    console.log(this.state);
    const { title, textBody, _id } = this.state.note;
    const { classes } = this.props;
    console.log("noteviewer", _id);
    return (
      <Fade bottom>
        <Main>
          {/* <div className={classes.section}>
          <div className={classes.container}> */}
          <GridContainer justify='center'>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <form>
                  <CardHeader color='info'>
                    <h1>{title}</h1>
                  </CardHeader>
                  <div>
                    <Button
                      component={Link}
                      to={`/edit-note/${_id}`}
                      simple
                      color='info'
                      onClick={() => this.handleClickOpen(<EditNote />)}
                    >
                      <Link to={`/edit-note/${_id}`}>
                        <LibraryBooks className={classes.icon} />
                        Edit
                      </Link>
                    </Button>
                    <Button
                      simple
                      color='info'
                      onClick={() => this.handleClickOpen("classicModal")}
                    >
                      <LibraryBooks className={classes.icon} />
                      Delete
                    </Button>
                  </div>
                  <NoteContainer>
                    <div>{textBody}</div>
                  </NoteContainer>
                  <CardBody />
                  <CardFooter>
                    <Button
                      component={Link}
                      block
                      to='/'
                      color='info'
                      size='md'
                    >
                      View Notes
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <Dialog
                classes={{
                  root: classes.center,
                  paper: classes.modal
                }}
                open={this.state.classicModal}
                // TransitionComponent={Transition}
                keepMounted
                onClose={() => this.handleClose("classicModal")}
                aria-labelledby='classic-modal-slide-title'
                aria-describedby='classic-modal-slide-description'
              >
                <DialogTitle
                  id='classic-modal-slide-title'
                  disableTypography
                  className={classes.modalHeader}
                >
                  <IconButton
                    className={classes.modalCloseButton}
                    key='close'
                    aria-label='Close'
                    onClick={() => this.handleClose("classicModal")}
                  >
                    <Close className={classes.modalClose} />
                  </IconButton>
                  <h4>Are you sure you want to delete?</h4>
                </DialogTitle>
                <DialogActions className={classes.modalFooter}>
                  <Button
                    onClick={() => this.props.deleteNote(_id)}
                    color='danger'
                  >
                    Delete Note
                  </Button>
                  <Button
                    onClick={() => this.handleClose("classicModal")}
                    color='info'
                  >
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            </GridItem>
          </GridContainer>
          {/* </div>
        </div> */}
        </Main>
      </Fade>
    );
  }
}

const mapStateToProps = state => {
  return { notes: state.notesReducer.notes };
};

export default connect(
  mapStateToProps,
  { deleteNote }
)(withStyles(javascriptStyles)(NoteViewer));
