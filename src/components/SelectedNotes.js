import React from "react";
import data from "./Data";
import ShowNote from "./ShowNote";
import LeftPanal from "./LeftPanal";
import Myheader from "./Myheader";
import { Link } from "react-router-dom";

class SelectedNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: data
    };
  }

  showSelected() {
    const p = this.state.notes.filter(
      el => this.props.match.params.id == el.id
    );
    return p[0];
  }

  render() {
    return (
      <div>
        <div>
          <SingleHeader p={this.showSelected()} />
        </div>
        <div className="container0">
          <LeftPanal />

          <div className="container1">
          <Myheader p={this.showSelected()} c={'single-note-title'} />
            <ShowNote p={this.showSelected()} c="single-note" />
          </div>
        </div>
      </div>
    );
  }
}

const SingleHeader = props => {
  return (
    <div className='single-header'>
      {console.log("inside singleHeader", props)}
      <div className="single-header-link"><Link to={`/editNote/${props.p.id}`}>edit</Link></div>
      <div className="single-header-link"><Link to={`/deleteNote/${props.p.id}`}>delete</Link></div>
      
      
    </div>
  );
};

export default SelectedNotes;
