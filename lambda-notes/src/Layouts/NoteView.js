import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNote, updateNote, deleteNote } from '../actions/noteActions';
import { Link } from 'react-router-dom';
import Modal from 'react-awesome-modal';



class NoteView extends Component {
    state = {
      title: '',
      textBody: '',
      visible : false
    };
  
    componentWillReceiveProps(nextProps, nextState) {
      const { title, textBody } = nextProps.note;
      this.setState({
        title,
        textBody
      });
    }

    componentDidMount() {
      const {id} = this.props.match.params;
      this.props.getNote(id);
    }

    onDeleteClick = (id) => {
        this.props.deleteNote(id);
        this.props.history.push('/')
      }

    openModal() {
        this.setState({
            visible : true
        });
    }
 
    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
      const { _id, title, textBody } = this.props.note;

    return (
      <div className="wrapper">
        <div className="navContainer">
            <button className="btn btn-link mt-4"><Link to={`/edit/${_id}`} className="nav-link" style ={{color:'#000', fontSize:'1.3rem', fontWeight:'bold'}}>Edit</Link></button>
            <button className="btn btn-link mt-4" onClick={() => this.openModal()} style ={{color:'#000', fontSize:'1.3rem', fontWeight:'bold'}}>Delete</button>
        </div>
        <h1 style={{marginBottom:'1.87rem'}}>{title}</h1> 
        <h4>{textBody}</h4> 

        <Modal visible={this.state.visible} width="800" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
            <div className="modalContent">
                <h3>Are you sure you want to delete this?</h3>
                <button className="btn btn-lg btn-danger mt-4" onClick={this.onDeleteClick.bind(this, _id)} style ={{color:'#000', fontSize:'1.3rem', fontWeight:'bold', marginRight:'1rem',padding:'0.625rem 1.56rem'}}>Delete</button>
                <button className="btn btn-lg btn-primary mt-4"  onClick={() => this.closeModal()} style ={{color:'#000', fontSize:'1.3rem', fontWeight:'bold', padding:'0.625rem 2.5rem'}}>No</button>
            </div>
        </Modal>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  note: state.note.note,
});

export default connect (mapStateToProps, { getNote, updateNote, deleteNote })(NoteView);