import React, { Component } from 'react';
import { noteEdit } from '../../actions/index';
import { connect } from 'react-redux';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          text: ''
        }
    }

    submit = e => {
      e.preventDefault();
      const { title, text } = this.state;
      const { notes, match } = this.props;
      const note = notes[match.params.index];
      this.props.EditNote({
        title: title === '' ? note.title : title,
        text: text === '' ? note.text : text,
        completed: note.completed,
        id: note._id  
      }, note._id);
      this.props.history.push('/');
    }

    render = () => {
        const { title, text } = this.state;
        const { notes, match } = this.props;
        const note = notes[match.params.index];
        return (
            <div className='page new-note'>
      	<div>
      		<h2>Edit Note</h2>
      		<div className='new-note-form'>
      			<form onSubmit={this.submit}>
	      			<div className='input'>
	      				<input 
		      				type="text"
		      				placeholder={note.title}
		      				value={title}
		      				onChange={e => this.setState({ title: e.target.value})} />
	      			</div>
	      			<div className='input'>
		      			<textarea
		      				placeholder={note.text}
		      				value={text}
		      				onChange={e => this.setState({ text: e.target.value })}>
                        </textarea>
		      		</div>
		      		<div className='input'>
		      			<button>Submit</button>
		      		</div>
	      		</form>
      		</div>
      	</div>
      </div>
    ); 
  }
}

const mapStateToProps = state => {
    return {
        notes: state.NoteReducer
    }
}

export default connect(mapStateToProps, {EditNote})(EditNote);

