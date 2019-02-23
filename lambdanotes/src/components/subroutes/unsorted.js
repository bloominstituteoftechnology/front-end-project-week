
import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { getNotes } from '../../actions/noteAction'

import '../../styles/unsorted.css'

import SearchBar from '../SearchBar'

class UnSorted extends React.Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    this.props.getNotes()      //gets notes from actions, which comes from store
  }
  
  getArray = tags => {
    console.log("tags string: ", tags);
    tags = tags.replace(/'/g, '"')
    const tagArr = JSON.parse(tags)
    return tagArr.map(t => t)
  }


  render(){
    return(
      <div id="myDIV">
        <div className="filter-title" ><h2> Your Notes (Unsorted): </h2></div>
        <div className="notebox-container">
          {this.props.notes.map(note => {
            return(
              <div className="notebox" key={note.id}>
                <div className="hoverinfo"><button>i</button>
                  <p>{note.textBody}</p>
                </div>
                <h2>
                  <Link to={`/notes/${note.id}`}>{note.title.toUpperCase()}</Link>
                </h2>
                <div className="contentbox">
                  <p> <strong>Content2:</strong> {note.textBody.slice(0, 100) + (note.textBody.length > 100 ? "..." : "")}</p>
                </div>
                <div>
                  {/* <p>{this.getArray(note.tags)}</p> */}
                  <p>{note.tags}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    error: state.error,
    loading: state.loading,
  }
}


export default connect(mapStateToProps, {getNotes})(UnSorted)