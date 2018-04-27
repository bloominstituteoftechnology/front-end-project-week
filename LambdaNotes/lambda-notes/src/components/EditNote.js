// REACT COMPONENTS
import React, { Component } from 'react';

// STYLING COMPONENTS
import '../Styles.css';

// REDUX COMPONENTS
import { connect } from 'react-redux';
import { editNote } from '../actions';

// ROUTING COMPONENTS
import { Link } from 'react-router-dom';

class EditNote extends Component {
  constructor(props){
    super(props)
    this.state= {
      note: {
        title: props.notes[props.match.params.id].title,
        text: props.notes[props.match.params.id].text,
      }
    }
  }

  render() {
    return (
      <div className="APP__EDIT-NOTE">
        <h4>Edit Note:</h4>
        <input className="APP__EDIT-TITLE"
          type="text"
          placeholder="Note Title"
          name="title"
          value={this.state.note.title}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
        <textarea className="APP__EDIT-CONTENT"
          type="text"
          placeholder="Note Content"
          name="text"
          value={this.state.note.text}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
        <Link to="/"><button className="APP__EDIT-SAVE"
          onClick={() => {
            this.props.editNote(this.state)
            this.setState({ note: [{ title: '', text: '' }]  });
          }}>Save Changes</button></Link>
      </div>
    );
  };
};

const mapStateToProps = state => {
    return {
      notes: state.notes,
    };
  };
  
export default connect(mapStateToProps, { editNote })(EditNote)