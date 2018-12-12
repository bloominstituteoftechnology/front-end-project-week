import React from 'react';
import {connect} from 'react-redux';
import {getNote, deleteNote} from '../actions';
import {Link} from 'react-router-dom';
import Switch from 'react-switch';
import ReactMarkdown from 'react-markdown';


class Note extends React.Component {
  constructor(){
    super();
    this.state = {
      title: null,
      textBody: null,
      checked: false,
    }

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    this.props.getNote(this.props.match.params.id);
    this.setState({
      title: null,
      textBody: null,
      id: null,
    })
  }

  handleChange = checked => {
    this.setState({checked})
  }

  deleteHandler = () => {
    this.props.deleteNote(this.props.match.params.id)
    this.props.history.push("/")
  }

  render(){

    setTimeout(() => {
      this.setState({
        title: this.props.note.title,
        textBody: this.props.note.textBody,
        id: this.props.note._id,
      })
    }, 600);
  
    if (this.state.id !== this.props.match.params.id) {
      return (
        <div className="wait">
          <h2>Loading Note...</h2>
        </div>
      )
    } 

    const markdownInput = this.state.textBody;

    return(
    
    <div className="note-container">
    {/* Need to find a way to get title and textbody from mapStateToProps via props from state --- fixed*/}
      <div className="note-header">
      <h2>{this.state.title}</h2>
      <Link to={`/note/edit/${this.state.id}`}><button>Update</button></Link>
      <button onClick={this.deleteHandler}>Delete</button>
      </div>
      <div className="markdown-switch">
        <p>Switch between Normal and MarkDown view</p>
        <Switch 
          onChange={this.handleChange}
          checked={this.state.checked}
          className="switch" />
      </div>
      <div className="body-container">
        {this.state.checked ? <ReactMarkdown source={markdownInput}/> : <p className="text-body">{this.state.textBody}</p> }
        
      </div>
    </div>
  )


  }
}

const mapStateToProps = state => ({
  note: state.note,
})

export default connect(mapStateToProps, {getNote, deleteNote})(Note);