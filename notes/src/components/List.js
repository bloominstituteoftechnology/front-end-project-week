import React from 'react';
import { connect } from 'react-redux';
import ViewNote from './ViewNote';

class List extends React.Component {

  render() {
    return (
      <div>
      	{this.props.notes.map((note, i) => {
      		return <ViewNote key={i} note={note} />
      	})}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  	notes: state.notes.notes
  } 
}

export default connect(mapStateToProps)(List);