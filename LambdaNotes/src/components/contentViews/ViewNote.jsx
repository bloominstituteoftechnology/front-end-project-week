import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activateNote, deactivateNote } from '../../actions';

class ViewNote extends Component {

  componentDidMount() {
   const id = this.props.match.params.id
    this.props.activateNote(id)
  }

  render() {
    return (
      <div>
        Note Name
        <div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    activeNote: state.activeNote,
  };
};

export default connect(mapStateToProps, { activateNote, deactivateNote })(ViewNote);

//map action for activate and deactivate note to component
//activate on mount, deactivate on dismount? will need to be same for edit view