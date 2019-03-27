import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SectionLogin from "../material/Sections/SectionLogin";

import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody";
import CardFooter from "../Card/CardFooter";
import Button from "../CustomButtons/Button.jsx";

const Main = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

const NoteContainer = styled.div`
margin auto;
width: 100%;
`;

class NoteViewer extends Component {
  state = {
    note: {}
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    const note = this.props.notes.filter(note => id === note._id.toString());
    this.setState({ note: note[0] });
  }

  render() {
    console.log(this.state);
    const { title, textBody, _id } = this.state.note;
    const { classes } = this.props;
    console.log("noteviewer", _id);
    return (
      <Main>
        {/* <div className={classes.section}>
          <div className={classes.container}> */}
        <GridContainer justify='center'>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <form>
                <CardHeader color='info'>
                  <h1>{title}</h1>
                  <div>
                    <Button
                      component={Link}
                      to={`/edit-note/${_id}`}
                      target='_blank'
                      color='info'
                      onClick={e => e.preventDefault()}
                    >
                      <Link to={`/edit-note/${_id}`}>
                        <div>edit</div>
                      </Link>
                    </Button>
                    <Button
                      component={Link}
                      to={`/delete-note/${_id}`}
                      target='_blank'
                      color='info'
                      onClick={e => e.preventDefault()}
                    >
                      <Link to={`/delete-note/${_id}`}>
                        <div>delete</div>
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <NoteContainer>
                  <div>{textBody}</div>
                </NoteContainer>
                <CardBody />
                <CardFooter>
                  <Button simple color='info' size='lg'>
                    View Notes
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
        {/* </div>
        </div> */}
      </Main>
    );
  }
}

const mapStateToProps = state => {
  return { notes: state.notesReducer.notes };
};

export default connect(
  mapStateToProps,
  {}
)(NoteViewer);
