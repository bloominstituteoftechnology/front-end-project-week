import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import './css/details.css'


class NoteDetails extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        {(this.props.note) ?
          (
            <div>
            <div className="links">
              <Link
                className="link"
                onClick={() => this.props.enableDelete()}
                to={`/listnotes/${this.props.note._id}/delete`}
              >delete</Link>
              <Link
                className="link"
                to={`/listnotes/${this.props.note._id}/edit`}
              >edit</Link>
              <Link
                className="link"
                to={`/listnotes/`}
              >back</Link>
            </div>
            <div className="noteDetails">
              <h4>{this.props.note.title}</h4>
          
            </div>
          </div>
        ) :
        null}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {state: store};//state is really props & store is store
}

const mapDispatchToProps = {

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteDetails));
