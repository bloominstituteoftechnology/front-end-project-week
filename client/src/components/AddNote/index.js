import React, { Component } from 'react'
import NewNote from './NewNote/index';
import { connect } from 'react-redux';
import { marked } from 'marked';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = {
  addNote: {
    margin: '100px auto 0 auto',
    // border: '1px solid black',
    width: '60vw',
  }
}

class AddNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: {
        title: '',
        text: '',
      },
    }

    this.handlePreview = this.handlePreview.bind(this);

  }

  handlePreview(md) {
    marked.setOptions({
      gfm: true,
    });
    return marked(md);
  }



  render() {

    const newNote = () => {
      return <NewNote handlePreview={this.handlePreview} />;
    }

    return (
      <Router>
        <div style={styles.addNote}>
          <Route path='' component={ newNote } />
        </div>
      </Router>
    );
  }
}

export default connect()(AddNote);
