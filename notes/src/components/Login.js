import React from 'react';
import { connect } from 'react-redux';
//mport { deleteNote, toggleModal } from '../actions';

class Login extends React.Component {

  // handleDeleteNote = () => {
  //   console.log(this.props.modal.deleteId);
  //   this.props.deleteNote(this.props.modal.deleteId);
  //   this.props.history.push('/');
  // }

  render() {
    return (
      <div className="login">
        <div className="title">Lambda Notes</div>
        <button className="github">Sign in with Github</button><br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  } 
}

export default connect(mapStateToProps)(Login);