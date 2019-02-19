import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";
import NoteList from "./components/NoteList";
import NoteDetail from "./components/NoteDetail";
import NoteForm from "./components/NoteForm";
import axios from "axios";
import tag from './components/tag.ico';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      tags: [],
      newTags: [],
      tag: '',
      title: "",
      contents: "",
      _id: ""
    };
  }

  fetchNotes = () => {
    axios
      .get("http://localhost:4000/api/posts")
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(err => console.log(err));
  };

  fetchTags = () => {
    axios
      .get("http://localhost:4000/api/tags")
      .then(response => {
        this.setState({ tags: response.data });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.fetchNotes();
    this.fetchTags();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.tags !== this.state.tags) {
  //     this.fetchTags();
  //   }
  // }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmitTag = e => {
    e.preventDefault();
    this.setState({
      newTags: [...this.state.newTags, this.state.tag],
      tag: ''
    })
  }

  postNotes = note => {
    axios
      .post("http://localhost:4000/api/posts", note)
      .then(response => {
        this.setState({
          tag: "",
          newTags:[],
          title: "",
          contents: "",
        });
        this.fetchNotes();
        this.fetchTags();
      })
      .catch(err => console.log(err));
  };

  deleteTag = id => {
    axios
      .delete(`http://localhost:4000/api/tags/${id}`)
      .then(response => {
        this.fetchTags();
      })
      .catch(err => console.log(err));
  };

  confirmDeleteTag = id => {
    if (window.confirm('Are you sure you want to delete this tag?')) {
      this.deleteTag(id);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <NavLink
            to="/"
            activeClassName="activeNewNote"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h1>Lambda Notes</h1>
          </NavLink>
          <NavLink
            to="/new-note"
            activeClassName="activeNewNote"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h2>+ New Note</h2>
          </NavLink>
          <div className="tags">
            <div className="tag-header">
              <img src={tag} alt="tag-icon" className="tag-icon" />
              <h2>Tags</h2>
            </div>
            {this.state.tags.map(tag => {
              return <div className="tag" key={tag.id}>
                <p>{tag.tag}</p>
                <p className='x hide' onClick={this.confirmDeleteTag.bind(this, tag.id)}>|  x</p>
              </div>
            })}
          </div>
        </header>
        <div className="body">
          <Route
            path="/new-note"
            render={props => (
              <NoteForm
                {...props}
                notes={this.state.notes}
                newTags={this.state.newTags}
                tag={this.state.tag}
                title={this.state.title}
                contents={this.state.contents}
                _id={this.state._id}
                handleInput={this.handleInput}
                handleSubmitTag={this.handleSubmitTag}
                fetchTags={this.fetchTags}
                postNotes={this.postNotes}
              />
            )}
          />
          <Route
            path="/"
            exact
            component={() => <NoteList notes={this.state.notes} />}
          />
          <Route
            path="/notes/:id"
            render={props => (
              <NoteDetail
                {...props}
                notes={this.state.notes}
                fetchNotes={this.fetchNotes}
                handleInput={this.handleInput}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
