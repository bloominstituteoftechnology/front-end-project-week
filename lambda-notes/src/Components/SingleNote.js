import React, {Component} from 'react'
import '../App.css'
import axios from 'axios';
import DeleteModal from './DeleteModal'
import {BrowserRouter as Router,Route, NavLink} from 'react-router-dom';

class SingleNote extends Component {
    constructor(props) {
        super(props);
        this.state= {
            note: {},
            deleteNote: false,
            home:false,
        };
    }

    
    
      
    componentDidUpdate() {
        if (Object.entries(this.state.note).length === 0){
        const ID = this.props.match.params.id;
        axios.get(`https://fe-notes.herokuapp.com/note/get/${ID}`)
        .then( response => {this.setState({note: response.data })})
        .catch (err => console.log(err))
        }
    }

    render(){
        let Modal = '';
        let editor =
        <NavLink activeClassName='selected' to={{pathname: `/note/edit/${this.props.match.params.id}`, state:{ID: this.props.match.params.id, title: this.state.note.title, textBody: this.state.note.textBody}}}>
        <h5>edit</h5>
        </NavLink>
        let deleter = <h5 onClick={this.props.deleteHandler}>delete</h5>


        if (this.props.DEL === true) {
            Modal = <DeleteModal clickForAllHandler={this.props.clickForAllHandler} deleteNote={this.props.deleteNote}  id={this.props.match.params.id} noHandler={this.props.noHandler} notes={this.state.notes}/>
            editor = <h6 className='notebuttons'>edit</h6>
            deleter = <h6 className='notebuttons'>delete</h6>
            }
        else { Modal = ''}
        let noteInfo =
        <div className='notesSingle'><div className='button'>
        {editor}
        {deleter}
        </div>
        <h3>{this.state.note.title}</h3>
        <div className='line'></div>
        <p className='fullText'>{this.state.note.textBody}</p>
        </div>
        if ((Object.entries(this.state.note).length === 0)) {
            noteInfo =
            <div className='notesSingle'>
            <h3>LOADING...</h3>
            </div>
        }
    return (
        <div className='singleContainer'>
        {Modal}

        {noteInfo}

        </div>
    )
}
}

export default SingleNote;