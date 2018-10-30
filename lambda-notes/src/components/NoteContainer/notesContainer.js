import React, { Component } from 'react';
import axios from 'axios';
import NotesList from './notesList';
import AddNote from './addNote';
import SideBar from '../sidebar/sidebar';
import { Route } from 'react-router-dom';
import Note from './note';

class NotesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
           
        };
    }


    componentDidMount() {
        axios
            .get('https://fe-notes.herokuapp.com/note/get/all')
            .then(response => {
                console.log(response);
                this.setState({ notes: response.data })
            })
            .catch(err => {
                console.log(err)
            })
    };

   
    changeState = () => {
        axios.get("https://fe-notes.herokuapp.com/note/get/all").then(res =>
      this.setState({
        notes: res.data
      })
    );
      }

    //   deleteNote= event =>{
    //     event.preventDefault();
    //     axios
    //     .delete(`https://fe-notes.herokuapp.com/note/get/${id}`)
    //     .then(response =>{
    //         this.changeState(response.data)
    //     })
    //     .catch(err=>
    //         console.log(err));

    // }


    render() {
        console.log('STATE', this.state);
        return (
            <div>
                <div className='notes-container'>
                    <Route exact path='/' render={(Ownprops)=>{
                        return(<NotesList {...Ownprops} notes={this.state.notes} />)
                    }}/>
                    
                    <Route path ='/add-note' render={(Ownprops) =>{
                        return(<AddNote {...Ownprops} changeState={this.changeState} />)
                    }}/>
                    <Route exact path = '/notes/:id' render={(props) =>{
                        return(<Note {...props} changeState={this.changeState}/>)
                    }}/>
                    
                </div>
            </div>

        )
    }

}

export default NotesContainer;