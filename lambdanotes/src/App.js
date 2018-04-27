import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Button} from 'reactstrap'
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

    
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('notes', JSON.stringify(nextState.notes));
        console.log('will update');
    }

    addNote = (title, content) => {
        console.log('Adding Note');
        const newNotes = this.state.notes;

        let id = newNotes.length;
        const newNote = { id: id,title: title, content: content };
        newNotes.push(newNote);
        this.setState({notes: newNotes});
        this.setState({displayNotes: newNotes});
    };

    updateNote = (title, content, id) => {
        console.log('Updating Note From App');
        const newNote = { id: id,title: title, content: content };
        const newNotes = this.state.notes;
        newNotes[id] = newNote;
        this.setState({notes: newNotes});
        this.setState({displayNotes: newNotes});
        //x

    };

    delete = (id) => {
        let newNotes = this.state.notes;
        newNotes = newNotes.filter((note) => note.id !== id);

        this.setState({notes: newNotes});
        this.setState({displayNotes: newNotes});

    };

    filterNotes(criterion) {
        if (criterion.length === 0) {
            this.setState({
                displayNotes: this.state.notes
            });
            console.log(`Display notes: ${this.state.notes}`)
        } else {
            const filteredNotes = this.state.notes.filter(note => note.title.toLowerCase().includes(criterion.toLowerCase()));
            this.setState({
                displayNotes: filteredNotes
            });
        }

    }

    sortByTitle = (e) => {
        e.preventDefault();
        const newNotes = this.state.displayNotes;
        console.log('Sort by:',newNotes);

        newNotes.sort(function (a, b) {
            let note1 = a.title.toUpperCase(); // ignore upper and lowercase
            let note2 = b.title.toUpperCase(); // ignore upper and lowercase
            if (note1 < note2) {
                return -1;
            }
            if (note1 > note2) {
                return 1;
            }
            return 0;
        });
        this.setState({displayNotes: newNotes});
    };

    render() {
        return (
            <div className="App">
                <div className='container'>
                    <div className="row">
                        <div className="col-3 left__side">
                            <h2 className='sidebar__header'>Lambda Notes</h2>
                            <SearchBar filterNotes={this.filterNotes}/>
                            <Button onClick={this.sortByTitle}>Sort By Title</Button>
                            <a href='/' className='sidebar__button'>
                                View Notes
                            </a>
                            <a href='/createNewNote' className='sidebar__button'>
                                +Create New Note
                            </a>
                        </div>
                        <Switch>
                            <Route exact path='/' render={() => <NoteList notes={this.state.displayNotes}/>}/>
                            <Route path='/createNewNote' render={() => <NoteForm onSubmit={this.addNote} />}/>
                            <Route path='/editNote/:id' render={(props) => <NoteEdit {...props} onSubmit={this.updateNote} notes={this.state.displayNotes}/>}/>
                            <Route path="/notedetail/:id" render={(props) => <NoteDetail {...props} notes={this.state.displayNotes} onDelete={this.delete}/>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
