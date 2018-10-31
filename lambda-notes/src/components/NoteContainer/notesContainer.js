import React, { Component } from 'react';
import axios from 'axios';
import NotesList from './notesList';
import AddNote from './addNote';
import { Route } from 'react-router-dom';
import Note from './note';
import './Notes.css';
import SearchBar from '../search/search';

class NotesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            searchedPost:[],
            searchResult:'',

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

    editNoteMaybe = data => {
        this.setState({ notes: data })
    }


    handleInput = event=>{
        this.setState({ searchResult: event.target.value});
    }
    searchResults= event=>{
        this.handleInput(event);
        this.setState(preState =>{
            const searchedPost = preState.notes.filter(result =>{
                return result.title.includes(preState.searchResult);
            });
            return {searchedPost: searchedPost}
        })
    }

    render() {
        console.log('STATE', this.state);
        return (
            <div className='all-notes'>
                <div>
                    <Route exact path='/' render={(Ownprops) => {
                        return (<NotesList {...Ownprops} stateSearch={this.state.searchResult} searchResults={this.searchResults} notes={this.state.searchedPost.length >0 ?
                            this.state.searchedPost
                            : this.state.notes} />)
                    }} />

                    <Route path='/add-note' render={(Ownprops) => {
                        return (<AddNote {...Ownprops} changeState={this.changeState} />)
                    }} />
                    <Route exact path='/notes/:id' render={(props) => {
                        console.log('OWNPROPs', props);
                        return (<Note {...props} changeState={this.changeState} editNoteMaybe={this.editNoteMaybe} />)
                    }} />

                </div>
            </div>

        )
    }

}

export default NotesContainer;