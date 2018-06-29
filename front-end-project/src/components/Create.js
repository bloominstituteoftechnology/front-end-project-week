import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { SideNav } from "../components";

class Create extends Component {
  state = {
    title: "",
    body: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.props.history.push("/notes");
  };
  inputChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <Grid container spacing={40}>
          <Grid item xs={4} sm={3}>
            <SideNav />
          </Grid>
          <Grid item xs={12}>
            <div style={{ marginLeft: "calc(5vw + (150px + 2vw))" }}>
              <h3 style={{textShadow: '3px 3px 13px rgba(255,255,255,0.57)'}}> Create Note: </h3>
              <form onSubmit={this.handleSubmit}>
                <div className="title">
                  <input
                    name="title"
                    value={this.state.title}
                    type="text"
                    required
                    placeholder="Note title"
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
                    placeholder="Note body"
                    style={{
                      border: "1px solid gray",
                      background: "white",
                      width: "calc(90%)"
                    }}
                    margin="normal"
                    required
                    multiline={"true"}
                    onChange={this.inputChangeHandler}
                    rows={14}
                  />
                  <div>
                    <button type="submit" className="saveButton">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Create;
