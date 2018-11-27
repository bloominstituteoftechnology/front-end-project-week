import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Home from './components/Home';
import NoteProfile from './components/NoteProfile';
import { deleteNote, fetchNotes } from './actions/actions';
import CreateForm from './components/CreateForm';
import EditForm from './components/EditForm';
import Login from './components/Login';
import VoiceNote from './components/VoiceNote';

const AppWrapper = styled.div`
    text-align: center;
    display: flex;
    width: 100%;
`

const Sidebar = styled.nav`
    width: 25%;
    align-self: flex-start;
    justify-self: flex-start;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    > input {
        width: 85%;
        height: 60px;
        font-size: 22px;
        margin-bottom: 30px;
        text-align: center;
    }
    > div {
          color: white;
          background-color: #16ccc9;
          width: 85%;
          height: 60px;
          font-size: 22px;
          border: 1px solid #8e8b8b;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bolder;
          margin-bottom: 30px;
          cursor: pointer;
          &:hover {
            color: #16ccc9;
            background-color: white;
            border: 1px solid #16ccc9
          }
    }
`

const SidebarHeader = styled.h1`
    margin: 40px 0;
    font-weight: bold;
    font-size: 60px;
    text-align: start;
    line-height: 50px;
    color: #545252;
`

const ModalWrapper = styled.div`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vw;
    background-color: rgba(252,252,252,0.4);
    ${props => props.modal ? `display: flex; justify-content: column; align-items: center` : `display: none`}
`

const DeleteModal = styled.div`
    width: 70%;
    height: 300px;
    opacity: none;
    border: 2px solid black;
    background-color: white;
    position: fixed;
    z-index: 1;
    left: 20%;
    top: 36%;
    ${props => props.modal ? `display: flex; flex-direction: column; align-items: center` : `display: none`}
    > h3 {
      margin-top: 50px;
      font-weight: normal;
      font-size: 24px;
    }
    > div {
      width: 60%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      > div {
        border: 1px solid darkgray;
        font-weight: bold;
        width: 45%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        background-color: #d01313;
        color: white;
        cursor: pointer;
        &:last-of-type {
          background-color: #13c1d0;
        }
      }
    }
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      search: '',
    }
  }

  changeHandler = e => {
    this.setState({search: e.target.value});
    }

  componentDidMount() {
    this.props.fetchNotes()
  }

  toggle = () => this.setState({modal: !this.state.modal})

  deleteClickHandler = () => {
      this.props.deleteNote(this.props.id);
      this.props.history.push('/');
      this.toggle();
  }

  exportCsv = () => {
      let CSVData = [['Row','Note', 'id', 'Title', 'Content']];
      this.props.notes.forEach((note, index) => CSVData.push([index+1, note._id, note.title, note.textBody]));
      CSVData = CSVData.map(item => item.join(','));
      CSVData = CSVData.join('%0A')
      let a = document.createElement('a');
      a.href = 'data:atachment/csv' + CSVData;
      a.target = "_Blank";
      a.download = 'Notes.csv';
      document.body.appendChild(a);
      a.click();
  }

  render() {
    return !localStorage.getItem('username') ? <Login /> :
            <AppWrapper modal={this.state.modal} >
                <ModalWrapper modal={this.state.modal}>
                    <DeleteModal className='modal' modal={this.state.modal}>
                        <h3>Are you sure you want to delete this?</h3>
                        <div>
                            <div onClick={this.deleteClickHandler} >Delete</div>
                            <div onClick={this.toggle} >No</div>
                        </div>
                    </DeleteModal>  
                </ModalWrapper>              
                <Sidebar>
                    <SidebarHeader>
                        Lambda <br/> Notes
                    </SidebarHeader>
                    <input placeholder='&#x1F50D; Search Notes...' onChange={this.changeHandler} value={this.state.search} />
                    <div onClick={() => this.props.history.push('/')} >View Your Notes</div>
                    <div onClick={() => this.props.history.push('/create')} >+ Create New Note</div>
                    <div onClick={() => this.props.history.push('/audio')} >+ Create Voice Note</div>
                    <div onClick={this.exportCsv} >Export CSV</div>                    
                </Sidebar>
                <Route exact path='/' render = {props => <Home search={this.state.search} {...props} />} />
                <Route exact path='/note/:id' render = {props => <NoteProfile toggle={this.toggle} {...props} />} />
                <Route exact path='/create' render = {props => <CreateForm {...props}/>} />
                <Route path='/note/:id/edit' render = {props => <EditForm {...props}/>} />
                <Route exact path='/audio' render = {props => <VoiceNote {...props}/>} />              
            </AppWrapper>
  }
}

const mapStateToProps = state => {
  return {
    id: state.active_Id,
    notes: state.notes
  }
}

export default withRouter(connect(mapStateToProps, {deleteNote, fetchNotes})(App));