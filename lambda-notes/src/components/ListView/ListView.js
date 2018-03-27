import React, { Component } from 'react';
import { connect } from 'react-redux';
import LinesEllipsis from 'react-lines-ellipsis';
// import { Button } from 'reactstrap';

import { showWholeNote } from '../../actions';
import './ListView.css';
import '../components.css';

class ListView extends Component {
  // constructor() {
  //   super();
  //   this.state = {}
  // }
  // 
  render() {
    
    return (
      <div className="mainContainer">

        <div className="container">
          <div className="leftSide">
            <div className='h1'>Lambda<br/> Notes</div>
            <button className="buttons">View Your Notes</button>
            <button className="buttons">+ Create New Note</button>
          </div>

          <div className="rightSide">
            <br/>
            <div className="listTitle">Your Notes:</div>
            <br/>
            <div className="listView">
              {this.props.notes.map(note => {
                return( <div className="eachNote" key={note.id}>
                  <div className="noteTitle">Note Title</div>
                  <LinesEllipsis
                    text={note.text}
                    maxLine="6"
                    ellipsis="..." 
                    basedOn="letters"
                  />
                </div> )
              })}
            </div>
          </div>
        </div>

      </div>
    )
    
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProps, { showWholeNote })(ListView);