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
        if (this.state.note.length !== 0){
            console.log('still updating in Single Note')
            const ID = this.props.match.params.id;
            axios.get(`https://fe-notes.herokuapp.com/note/get/${ID}`)
            .then( response => {this.setState({note: response.data })})
            .catch (err => console.log(err))}}


    render(){
        let Modal = '';
        let Edit = <NavLink className="buttons" activeClassName='selected' to={{pathname: `/note/edit/${this.props.match.params.id}`, state:{ID: this.props.match.params.id, title: this.state.note.title, textBody: this.state.note.textBody}}}> <h5>edit</h5> </NavLink>;
        let Delete = <h5 className="buttons" onClick={this.props.deleteHandler}>delete</h5>

        if (this.props.DEL === true) {
            Modal = <DeleteModal clickForAllHandler={this.props.clickForAllHandler} deleteNote={this.props.deleteNote}  id={this.props.match.params.id} noHandler={this.props.noHandler} notes={this.state.notes}/>;
            Edit = <h4 className="buttons">edit</h4>;
            Delete = <h4 className="buttons">delete</h4>;
            let disabled_bottons = document.getElementsByClassName("buttons");
            for (var i = 0; i < disabled_bottons.length; i++) {
                disabled_bottons[i].disabled = true;
            }
        }

        else { 
        Modal = '';
        Edit = <NavLink className="buttons" activeClassName='selected' to={{pathname: `/note/edit/${this.props.match.params.id}`, state:{ID: this.props.match.params.id, title: this.state.note.title, textBody: this.state.note.textBody}}}> <h5>edit</h5> </NavLink>;
        Delete = <h5 className="buttons" onClick={this.props.deleteHandler}>delete</h5>;

        let disabled_bottons = document.getElementsByClassName("buttons");
        for (var i = 0; i < disabled_bottons.length; i++) {
            disabled_bottons[i].disabled = false
        }
    
    }
    return (
        <div className='singleContainer'>
        {Modal}

        <div className='notesSingle'>
            <div className='button'>
           {Edit}
           {Delete}
            </div>
            <h3>{this.state.note.title}</h3>
            <div className='line'></div>
            <p className='fullText'>{this.state.note.textBody}</p>

        </div>
        </div>
    )
}
}

export default SingleNote;