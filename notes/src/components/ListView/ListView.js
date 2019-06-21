import React, { Component } from 'react';
import Note from './Note';
import { connect } from 'react-redux';


class ListView extends Component {

	shouldComponentUpdate = nextProps => {
		if(nextProps.notes !== this.props.notes) return true;
		else return false;
	}

  render = () => {
    const { notes, history } = this.props;
    console.log(this.props);
    return (
      <div className="page list-view">
      	<div>
      		<h2>Your Notes</h2>
      		<div className='notes'>
      			{
      				notes.map((note, i) => {
      					const { id, title, text, completed } = note;
      					return (
                  <Note
                    key={id}
                    id={id}
                    index={i}
                    title={title}
                    text={text}
                    completed={completed}
                    history={history} />
                );
      				})
      			}
      		</div>
      	</div>
      </div>
    );
  }
}

const mSTP = state => {
  return {
    notes: state
  }
}

export default connect(mSTP)(ListView);