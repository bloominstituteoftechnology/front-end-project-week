import React, { Component } from 'react';
import check from './check-g.svg';
import { markComplete, deleteNote } from '../../actions';
import { connect } from 'react-redux';

class Note extends Component {
  render = () => {
  	const { title, text, completed, index, markComplete, deleteNote, history } = this.props;
    return (
      <div 
        className='note'
        onClick={() => history.push(`/Edit-Note/${index}`)}>
      	<div style={{
      		opacity: completed ? 0.25 : 1
      	}}>
      		<h3>{title}</h3>
      		<div className='divider'></div>
      		<p>{text}</p>
      	</div>
      	<button 
          onClick={e => {
            e.stopPropagation();
            markComplete(index)
          }}
          className='complete'>
      		{
      			completed &&
      			<img src={check} alt="complete" />
      		}
      	</button>
      	<button 
          onClick={e => {
            e.stopPropagation();
            deleteNote(index);
          }}
          className='delete'>X</button>
      </div>
    );
  }
}

export default connect(null, { markComplete, deleteNote })(Note);