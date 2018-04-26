import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import NoteList from './components/Notes/NoteList';
import './App.css';
import NoteForm from "./components/Notes/NoteForm";
import NoteDetail from './components/Notes/NoteDetail';
import NoteEdit from './components/Notes/NoteEdit';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            displayNotes:[]
        };

        this.filterNotes = this.filterNotes.bind(this);
    }

    componentWillMount() {
        localStorage.getItem('notes') && this.setState({notes: JSON.parse(localStorage.getItem('notes'))});
        localStorage.getItem('notes') && this.setState({displayNotes: JSON.parse(localStorage.getItem('notes'))});
    }
    componentDidMount() {
        this.getData();
    }

    getData() {
    }
    
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('notes', JSON.stringify(nextState.notes));
    }

    addNote = (title, content) => {
        console.log('Adding Note');
        const newNotes = this.state.notes;

        let id = newNotes.length;
        const newNote = { id: id,title: title, content: content };
        newNotes.push(newNote);
        this.setState({notes: newNotes});
    };

    filterNotes(criterion) {
        if (criterion.length === 0) {
            this.setState({
                displayNotes: this.state.notes
            });
            console.log(`Display notes: ${this.state.notes}`)
        } else {
            const filteredPosts = this.state.notes.filter(note => note.title.toLowerCase().includes(criterion.toLowerCase()));
            this.setState({
                displayNotes: filteredPosts
            });
        }

    }
    render() {
        return (
            <div className="App">
                <div className='container'>
                    <div className="row">
                        <div className="col-3 left__side">
                            <h2 className='sidebar__header'>Lambda Notes</h2>
                            <SearchBar filterNotes={this.filterNotes}/>
                            <a href='/' className='sidebar__button'>
                                View Notes
                            </a>
                            <a href='/createNewNote' className='sidebar__button'>
                                +Create New Note
                            </a>
                        </div>
                        <Switch>
                            <Route exact path='/' render={() => <NoteList notes={this.state.displayNotes}/>}/>
                            <Route path='/createNewNote' render={() => <NoteForm onSubmit={this.addNote}/>}/>
                            <Route path='/editNote' render={() => <NoteEdit />}/>
                            <Route path="/notedetail/" render={() => <NoteDetail/>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
