import React from 'react';
import {connect} from 'react-redux';
import {getNote} from '../actions';

class Note extends React.Component {
  constructor(){
    super();
    this.state = {
      title: null,
      textBody: null,
    }
  }
  componentDidMount(){
    this.props.getNote(this.props.match.params.id);
    this.setState({
      title: null,
      textBody: null,
    })
  }

  render(){

    setTimeout(() => {
      this.setState({
        title: this.props.note.title,
        textBody: this.props.note.textBody,
      })
    }, 600);
  
  return(
    
    <div className="note-container">
    {/* Need to find a way to get title and textbody from mapStateToProps via props from state*/}
      <h2>{this.state.title}</h2>
      <div className="body-container">
        <p className="text-body">{this.state.textBody}</p>
      </div>
    </div>
  )


  }
}

const mapStateToProps = state => ({
  note: state.note,
})

export default connect(mapStateToProps, {getNote})(Note);