import React, { Component } from "react";
import { connect } from "react-redux";
import { createNote } from "../../actions/index";
import styled from "styled-components";
import SectionLogin from "../material/Sections/SectionLogin";
import WorkSection from "../../views/LandingPage/Sections/WorkSection";

import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import CustomInput from "../CustomInput/CustomInput.jsx";
import Button from "../CustomButtons/Button";

import workStyle from "../../assets/jss/material-kit-react/views/landingPageSections/workStyle";

const NewForm = styled.div`
  margin-left: 5%;
  display: flex;
  width: 100%;
`;

class NewNote extends Component {
  state = {
    title: "",
    textBody: ""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddNote = e => {
    e.preventDefault();
    const addedNote = {
      title: this.state.title,
      textBody: this.state.textBody
    };
    this.props.createNote(addedNote);
  };

  render() {
    console.log(this.state);
    const { classes } = this.props;
    return (
      <div>
        <NewForm>
          {/* <form onSubmit={e => this.handleAddNote(e)}>
            <h1>Create New Note:</h1>
            <input
              name='title'
              value={this.state.title}
              type='text'
              placeholder='Note Title'
              onChange={this.handleInputChange}
            />
            <br />
            <input
              name='textBody'
              value={this.state.textBody}
              type='text'
              placeholder='Note content'
              onChange={this.handleInputChange}
            />
            <br />
            <button type='submit'>Save</button>
          </form> */}
          <GridContainer justify='center'>
            <GridItem cs={12} sm={12} md={12}>
              {/* <h2 className={classes.title}>Create New Note</h2> */}
              <form onSubmit={e => this.handleAddNote(e)}>
                <h1>Create New Note:</h1>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      name='title'
                      value={this.state.title}
                      labelText='Note Title'
                      formControlProps={{
                        fullWidth: true,
                        onChange: this.handleInputChange
                      }}
                    />
                  </GridItem>
                  <CustomInput
                    name='textBody'
                    value={this.state.textBody}
                    labelText='Note Content'
                    formControlProps={{
                      fullWidth: true,
                      onChange: this.handleInputChange
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                  <GridContainer justify='center'>
                    <GridItem xs={12} sm={12} md={12}>
                      <Button type='submit' color='primary'>
                        Save
                      </Button>
                    </GridItem>
                  </GridContainer>
                </GridContainer>
              </form>
            </GridItem>
          </GridContainer>
        </NewForm>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notesReducer.notes,
    createNote: state.createNote
  };
};

export default connect(
  mapStateToProps,
  { createNote }
)(NewNote);
