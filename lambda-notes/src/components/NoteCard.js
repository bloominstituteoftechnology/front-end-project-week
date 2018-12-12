import React from 'react';
import { Link} from 'react-router-dom';
import {connect} from "react-redux";
import {getNote} from "../actions";


class NoteCard extends React.Component {

  

  render(){

    console.log(this.props.id)

    return (
      <div className="card-main-container">
        <div className="card-header-container">
          <Link to={`/note/${this.props.id}`}><h3>{this.props.title}</h3></Link>
        </div>
        {/* just show preview for now, implement SUMMRY api when mvp  is done */}
        <div className="card-body-container">
          <p className="text-body">{this.props.textBody}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {getNote})(NoteCard);