import React, {Component} from 'react';
import {aux} from '../HOC/Aux';
import classes from './index.css';
import {store} from '../../';
import {Link} from 'react-router-dom';
import {updateNote, deleteNote} from '../../Actions/NoteActions';

export class Note extends Component {
  constructor(props){
    super(props);
    this.state = {
      showForm: false,
      showModal: false,
      header: this.props.header,
      body: this.props.body,
      listItem: '',
      checkList: [],
    };
  }
  updateNote = () => {
    const update = {username: store.getState().username,header: this.state.header, body: this.state.body};
    if (this.state.header === '') {
      update.header = this.props.header;
    } else if( this.state.body === '') {
      update.body = this.props.body;
    }
    store.dispatch(updateNote(this.props.id, update));
    this.setState({header: '', body: ''});
  }
  deleteNote = () => {
    store.dispatch(deleteNote(store.getState().username,this.props.id));
  }
  changeState =  (e) => this.setState({[e.target.name]: e.target.value});
  addCheckListItem = () => {
    const {listItem} = this.state;
    let {checkList} = this.state;
    checkList.push(listItem);
    this.setState({checkList});
  }
  completeItem = (e) => {
    e.target.classList.add('check');
  }
  render() {
    let modal = null;
    let form = null;
    let note = (
      <React.Fragment>
        <div className={classes.buttonContainer}>
          <button  onClick={() => this.setState({showForm: !this.state.showForm})} className={classes.marginOne + " " + classes.buttonContainer__Button}>Edit</button>
          <button onClick={() => this.setState({showModal: !this.state.showModal})} className={classes.buttonContainer__Button}>Delete</button>
        </div>
        <h2 className={classes.header}>{this.props.header}</h2>
        <p className={classes.body}>{this.props.body}</p>
      </React.Fragment>
    );
    let checkList = (
      <div className={classes.clipBoardContainer}>
        <div className={classes.clipBoardContainer__Circle}></div>
        <div className={classes.clipBoardContainer__Clip}></div>
        <h2 className={classes.clipBoardContainer__Header}>Check list:</h2>
        <div className={classes.clipBoardContainer__FormContainer}>
          <input
            name='listItem'
            value={this.state.listItem}
            className={classes.clipBoardContainer__Input}
            onChange={(e) => this.setState({listItem: e.target.value})}
          />
          <button className={classes.clipBoardContainer__Button} onClick={this.addCheckListItem}>+</button>
        </div>
        {this.state.checkList.length > 0 ? <ul className={classes.clipBoardContainer__CheckListContainer} onClick={this.completeItem}>{this.state.checkList.map((item, i) => <li key={item + i} className={classes.clipBoardContainer__CheckListItem}>{item}<span className={classes.clipBoardContainer__DeleteCheckListItem}>x</span></li>)}</ul> : null}
      </div>
    );
    if (this.state.showModal === true) {
      modal = (
        <div className={classes.ModalContainer}>
          <div className={classes.ModalContainer__ContentContainer}>
            <h2>Are you sure you want to delete this?</h2>
            <div className={classes.ModalContainer__ButtonsContainer}>
              <Link to='/' className={classes.link}>
                <button className={classes.ModalContainer__Button + " "+ classes.ModalContainer__WrappedButton + " " + classes.red}
                  onClick={() => {
                    this.deleteNote()
                    this.setState({showModal: !this.state.showModal});
                }}>
                  Delete
                </button>
              </Link>
              <button className={classes.ModalContainer__Button} onClick={() => this.setState({showModal: !this.state.showModal})} >No</button>
            </div>
          </div>
        </div>);
    }
    if (this.state.showForm === true) {
      form = (
        <div className={classes.formContainer}>
          <h2 className={classes.Container__Header}>Edit Note:</h2>
          <input
            className={classes.Container__input}
            name='header'
            value={this.state.header}
            onChange={this.changeState}
            placeholder='Note Title'
          />
          <textarea
            className={classes.Container__inputBody}
            name='body'
            value={this.state.body}
            onChange={this.changeState}
            placeholder='Note Content'
          />
          <Link to='/'><button className={classes.submitButton} onClick={this.updateNote}>Update</button></Link>
        </div>
      );
      note = null;
      checkList = null;
    }
    return (
      <aux>
        {modal}
        {note}
        {checkList}
        {form}
      </aux>
    );
  }
}
