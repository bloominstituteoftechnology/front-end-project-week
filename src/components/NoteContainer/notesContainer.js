import React, { Component } from 'react';
import axios from 'axios';
import NotesList from './notesList';
import AddNote from './addNote';
import { Route } from 'react-router-dom';
import Note from './note';
import './Notes.css';

const url = process.env.REACT_APP_DB_URL;

class NotesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            notes: [],
            searchedPost: [],
            searchResult: '',
        };
    };

    authenticate = () => {
        const token = localStorage.getItem('bit_token');
        const options = {
            headers: {
                authorization: token,
            },
        };
        if (token) {
            axios
                .get(`${url}/note/get/all`, options)
                .then((res) => {
                    console.log(res);
                    if (res.status === 200 && res.data) {
                        this.setState({ loggedIn: true, notes: res.data });
                    } else {
                        throw new Error();
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            throw new Error();
        }
    }


    componentDidMount() {
        this.authenticate();
    };

    changeState = () => {
        this.authenticate();
    }

    editNoteMaybe = data => {
        this.authenticate();
    }


    handleInput = event => {
        this.setState({ searchResult: event.target.value });
    }
    searchResults = event => {
        this.handleInput(event);
        this.setState(preState => {
            const searchedPost = preState.notes.filter(result => {
                return result.title.toLowerCase().includes(preState.searchResult);
            });
            return { searchedPost: searchedPost }
        })
    }

    render() {
        console.log('STATE', this.state);
        return (
            <div className='all-notes'>
                <div>
                    <Route exact path='/' render={(Ownprops) => {
                        return (<NotesList {...Ownprops} stateSearch={this.state.searchResult}
                            searchResults={this.searchResults}
                            notes={this.state.searchedPost.length > 0 ?
                                this.state.searchedPost
                                : this.state.notes} />)
                    }} />
                    <Route path='/add-note' render={(Ownprops) => {
                        return (<AddNote {...Ownprops} changeState={this.changeState} username={this.props.username} />)
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