import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


class Notes extends Component {
  state = {
    search: "",
    titleCheck: false,
    contentCheck: false
  };

  clickSearch(event) {
    this.setState({
      search: event.target.value.toLowerCase().substr(0, 20)
    });
  }

  clickContent(event) {
    this.setState({
      contentCheck: !this.state.contentCheck,
      titleCheck: this.state.contentCheck,
    });
    // document.getElementsByClassName("search-title").checked = false;
    // document.getElementsByClassName("search-content").checked = true;
    // console.log(document.getElementsByClassName("search-title"));    
    // console.log(document.getElementsByClassName("search-content"));
    // console.log(event.target)
  }

  clickTitle(event) {
    this.setState({
      titleCheck: !this.state.titleCheck,
      contentCheck: this.state.titleCheck,
    });
    // document.getElementsByClassName("search-content").checked = false;
    // document.getElementsByClassName("search-title").checked = true;
    // console.log(document.getElementsByClassName("search-content"));
    // console.log(document.getElementsByClassName("search-title"));
  }

  render() {
    let filteredNotes = this.props.notes.filter(note => {
      if (this.state.search === "") {
        return this.props.notes;
      }
      if (this.state.titleCheck) {
        return note.title
          .toLowerCase()
          .indexOf(this.state.search) !== -1;
      } else if (this.state.contentCheck) {
        return note.content
          .toLowerCase()
          .indexOf(this.state.search) !== -1;
      }
      return this.props.notes;
    });

    return <div className="col-sm-9 cards">
        <div className="sort-div">
          <button className="sort-but pt-sm-1">sort by date</button>
          <button className="sort-but pt-sm-1">sort by title</button>
        </div>
        <h4 className="your-notes">Your notes:</h4>
        <form>
          <input className="search-input" type="text" value={this.state.search} onChange={this.clickSearch.bind(this)} placeholder="Please choose a search type" />
          <div>
            <input className="search-title" defaultChecked type="radio" value={this.state.titleCheck} name="search" onChange={this.clickTitle.bind(this)} />
            <label className="search-label">Search Title</label>
            <input className="search-content" type="radio" value={this.state.contentCheck} name="search" onChange={this.clickContent.bind(this)} />
            <label className="search-label">Search Content</label>
          </div>
        </form>
        <div className="notes-list" id="sortable">
          {filteredNotes
            .map(note => {
              return <Link to={`notes/${note.id}`} key={note.id} className="link-wrap">
                  <div className="card mb-sm-4 col-sm-3 ui-state-default" key={note.id}>
                    <div className="card-head no-bg">
                      <h5 className="d-sm-inline">{note.title}</h5>
                    </div>
                    <div className="list-group list-group-flush">
                      <p className="mt-sm-2">{note.content}</p>
                    </div>
                  </div>
                </Link>;
            })
            .reverse()}
        </div>
      </div>;
  }
  
};

const mapStateToProps = state => {
  return {
    notes: state
  };
};


export default connect(mapStateToProps, { })(Notes);