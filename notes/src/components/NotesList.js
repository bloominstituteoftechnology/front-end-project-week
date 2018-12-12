import React, { Fragment, Component } from "react";
import '../App.css';

const ReactMarkdown = require("react-markdown/with-html");
const markdown = `
This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.
# This is a header\n\nAnd this is a paragraph
`;
class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredNotes: [],
      markdown: "regular"
    };
  }

  searchPostsHandler = e => {
    const filteredNotes = this.props.notes.filter(note => {
      if (note.title.includes(e.target.value)) {
        return note;
      }
    });
    this.setState({ ...this.state, filteredNotes: filteredNotes });
  };

  sortHandlerMarkdown = e => {
    console.log(e.target.value);
    this.setState({ ...this.state, markdown: e.target.value });
  };

  render() {
    console.log("rendering NotesList component");
    if (this.props.isFetching) {
      return <h4>Loading items...</h4>;
    }
    return (
      <Fragment>
        <div className="searchContainer">
          <input
            type="text"
            placeholder="Search For Note"
            onKeyDown={this.searchPostsHandler}
          />
          <div className="sort">
            <select onChange={this.props.sortHandler}>
              <option value="" selected>
                SORT ME!
              </option>
              <option value="none">None</option>
              <option value="alphabetically">Alphabetically</option>
            </select>
          </div>
          <div className="sort-markdown">
            <select onChange={this.sortHandlerMarkdown}>
              <option value="" selected>
                Mark Down?
              </option>
              <option value="regular">Regular</option>
              <option value="markdown">Markdown</option>
            </select>
          </div>
        </div>
        <h2>Your Notes:</h2>
        <div className="notes-container">
          {this.state.filteredNotes.length > 0
            ? this.state.filteredNotes.map(note => {
                return (
                  <div
                    className="note"
                    onClick={() =>
                      this.props.history.push(`/notes/${note._id}`)
                    }
                    key={note.id}
                  >
                    <h3>{note.title}</h3>
                    <p>{note.textBody}</p>
                  </div>
                );
              })
            : this.props.notes.map(note => {
                return (
                  <div
                    className="note"
                    onClick={() =>
                      this.props.history.push(`/notes/${note._id}`)
                    }
                    key={note.id}
                  >
                    <Fragment>
                      {this.state.markdown === "markdown" ? (
                        <ReactMarkdown
                          className="markdown-title"
                          source={note.title}
                          escapeHtml={false}
                        />
                      ) : (
                        <h3>{note.title}</h3>
                      )}
                    </Fragment>
                    <Fragment>
                      {this.state.markdown === "markdown" ? (
                        <ReactMarkdown
                          className="markdown-content"
                          source={note.textBody}
                          escapeHtml={false}
                        />
                      ) : (
                        <p>{note.textBody}</p>
                      )}
                    </Fragment>
                  </div>
                );
              })}
        </div>
        {/* <ReactMarkdown source={markdown} escapeHtml={false} /> */}
      </Fragment>
    );
  }
}

// ReactDOM.render(
//   <ReactMarkdown source={input} />,
//   document.getElementById('test')
// );

export default NotesList;
