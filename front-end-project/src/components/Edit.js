import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { SideNav } from "../components";

class Edit extends Component {
  state = {
    title: "",
    body: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.editNote(this.props.match.params.id, this.state);
    this.props.history.push("/");
  };
  inputChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
    {/* Ternary to ensure application does not perform functions on resources not yet loaded
    This is necessary only because the placeholder relies on the state's currentNote value */}
        {this.props.currentNote ? (
          <Grid container spacing={40}>
            <Grid item xs={4} sm={3}>
              <SideNav />
            </Grid>
            <Grid item xs={12}>
              <div style={{ marginLeft: "calc(5vw + (150px + 2vw))" }}>
                <h3> Edit Note: </h3>
                <form onSubmit={this.handleSubmit}>
                  <div className="title">
                    <input
                      name="title"
                      value={this.state.title}
                      type="text"
                      required
                      placeholder={this.props.currentNote.title}
                      style={{
                        border: "1px solid gray",
                        background: "white",
                        width: "40vw"
                      }}
                      className="title"
                      onChange={this.inputChangeHandler}
                      margin="normal"
                    />
                  </div>
                  <div>
                    <textarea
                      name="body"
                      type="text"
                      value={this.state.body}
                      placeholder={this.props.currentNote.body}
                      style={{
                        border: "1px solid gray",
                        background: "white",
                        width: "calc(90%)"
                      }}
                      margin="normal"
                      multiline={"true"}
                      required
                      onChange={this.inputChangeHandler}
                      rows={14}
                    />
                    <div>
                      <button type="submit" className="saveButton">
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </Grid>
          </Grid>
        ) : null}
      </div>
    );
  }
}

export default Edit;
