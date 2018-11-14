import React, { Component } from 'react';
import axios from 'axios';
import NotesList from './components/NotesList.js';

class App extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            notes: [],
        }
    }

    componentDidMount() {
        axios.get("https://fe-notes.herokuapp.com/note/get/all")
        .then(res    =>  {
            this.setState((state)   =>  ({
                notes: res.data,
            }))
        })
    }

    render() {
        return (
            <div className="App">
                <NotesList notes={this.state.notes}/>
            </div>
        );
    }
}

export default App;
