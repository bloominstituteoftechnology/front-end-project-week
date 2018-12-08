import React from 'react'
import { connect } from 'react-redux'
import { getNote } from '../../actions/'
import { withRouter } from 'react-router-dom'
import DeleteView from './DeleteView';

class SingleNoteView extends React.Component {

 // componentDidMount = () => {
 //  const singleNote = this.props.notes.find(note => this.props.match.params.url === note.id)
 //  this.setState({
 //   noteTitle: singleNote.title,
 //   noteBody: singleNote.textBody
 //  })
 // }




   render(){
   return (
    <div>
    <div>
     {this.props.noteTitle}
    {this.props.noteBody}
    </div>
    
    {/* <button>
    <Route path="/delete" render={() => <DeleteView/>} />
    <Link to="/delete/">
     Delete
    </Link>
    </button> */}
    </div>
  )}
}

const mapStateToProps = state => {
 const { notes } = state 
 return {
  notes: notes,
 }
}
export default withRouter(connect(mapStateToProps, { getNote })(SingleNoteView))