import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import NoteList from './components/Notes/NoteList';
import './App.css';
import NoteForm from "./components/Notes/NoteForm";
import NoteDetail from './components/Notes/NoteDetail';
import NoteEdit from './components/Notes/NoteEdit';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {id: 0,  title: 'Lorem ipsum',   content: 'et qui nonumes salutatus urbanitas, ei nec assentior quaerendum, mea at exerci consetetur appellantur. Vis velit nostrum ut. Est ei esse aliquam scribentur, nam quas nonumes et. An sea tantas propriae, esse dicta doctus cu his. At saepe scripta contentiones eos, quem aliquam fabellas ius ei. Eam te prima discere. Debet dolorum sadipscing ex eos. Te mediocrem adversarium mel, ex mel causae accusata. Qui cu everti ceteros, id summo patrioque quaerendum usu'},
                {id: 1,  title: 'Lorem ipsum',   content: 'et qui nonumes salutatus urbanitas, ei nec assentior quaerendum, mea at exerci consetetur appellantur. Vis velit nostrum ut. Est ei esse aliquam scribentur, nam quas nonumes et. An sea tantas propriae, esse dicta doctus cu his. At saepe scripta contentiones eos, quem aliquam fabellas ius ei. Eam te prima discere. Debet dolorum sadipscing ex eos. Te mediocrem adversarium mel, ex mel causae accusata. Qui cu everti ceteros, id summo patrioque quaerendum usu'},
                {id: 2,  title: 'Lorem ipsum',   content: 'et qui nonumes salutatus urbanitas, ei nec assentior quaerendum, mea at exerci consetetur appellantur. Vis velit nostrum ut. Est ei esse aliquam scribentur, nam quas nonumes et. An sea tantas propriae, esse dicta doctus cu his. At saepe scripta contentiones eos, quem aliquam fabellas ius ei. Eam te prima discere. Debet dolorum sadipscing ex eos. Te mediocrem adversarium mel, ex mel causae accusata. Qui cu everti ceteros, id summo patrioque quaerendum usu'},
                {id: 3,  title: 'Lorem ipsum',   content: 'et qui nonumes salutatus urbanitas, ei nec assentior quaerendum, mea at exerci consetetur appellantur. Vis velit nostrum ut. Est ei esse aliquam scribentur, nam quas nonumes et. An sea tantas propriae, esse dicta doctus cu his. At saepe scripta contentiones eos, quem aliquam fabellas ius ei. Eam te prima discere. Debet dolorum sadipscing ex eos. Te mediocrem adversarium mel, ex mel causae accusata. Qui cu everti ceteros, id summo patrioque quaerendum usu'},
                {id: 4,  title: 'Lorem ipsum',   content: 'et qui nonumes salutatus urbanitas, ei nec assentior quaerendum, mea at exerci consetetur appellantur. Vis velit nostrum ut. Est ei esse aliquam scribentur, nam quas nonumes et. An sea tantas propriae, esse dicta doctus cu his. At saepe scripta contentiones eos, quem aliquam fabellas ius ei. Eam te prima discere. Debet dolorum sadipscing ex eos. Te mediocrem adversarium mel, ex mel causae accusata. Qui cu everti ceteros, id summo patrioque quaerendum usu'},
                {id: 5,  title: 'Lorem ipsum',   content: 'et qui nonumes salutatus urbanitas, ei nec assentior quaerendum, mea at exerci consetetur appellantur. Vis velit nostrum ut. Est ei esse aliquam scribentur, nam quas nonumes et. An sea tantas propriae, esse dicta doctus cu his. At saepe scripta contentiones eos, quem aliquam fabellas ius ei. Eam te prima discere. Debet dolorum sadipscing ex eos. Te mediocrem adversarium mel, ex mel causae accusata. Qui cu everti ceteros, id summo patrioque quaerendum usu'},
                {id: 6,  title: 'Lorem ipsum',   content: 'et qui nonumes salutatus urbanitas, ei nec assentior quaerendum, mea at exerci consetetur appellantur. Vis velit nostrum ut. Est ei esse aliquam scribentur, nam quas nonumes et. An sea tantas propriae, esse dicta doctus cu his. At saepe scripta contentiones eos, quem aliquam fabellas ius ei. Eam te prima discere. Debet dolorum sadipscing ex eos. Te mediocrem adversarium mel, ex mel causae accusata. Qui cu everti ceteros, id summo patrioque quaerendum usu'},
                {id: 7,  title: 'Lorem ipsum',   content: 'et qui nonumes salutatus urbanitas, ei nec assentior quaerendum, mea at exerci consetetur appellantur. Vis velit nostrum ut. Est ei esse aliquam scribentur, nam quas nonumes et. An sea tantas propriae, esse dicta doctus cu his. At saepe scripta contentiones eos, quem aliquam fabellas ius ei. Eam te prima discere. Debet dolorum sadipscing ex eos. Te mediocrem adversarium mel, ex mel causae accusata. Qui cu everti ceteros, id summo patrioque quaerendum usu'},
                {id: 8,  title: 'Lorem ipsum',   content: 'et qui nonumes salutatus urbanitas, ei nec assentior quaerendum, mea at exerci consetetur appellantur. Vis velit nostrum ut. Est ei esse aliquam scribentur, nam quas nonumes et. An sea tantas propriae, esse dicta doctus cu his. At saepe scripta contentiones eos, quem aliquam fabellas ius ei. Eam te prima discere. Debet dolorum sadipscing ex eos. Te mediocrem adversarium mel, ex mel causae accusata. Qui cu everti ceteros, id summo patrioque quaerendum usu'},

            ],
        };
    }

    addNote = (title, content) => {
        console.log('Adding Note');
        const newNotes = this.state.notes;

        let id = newNotes.length;
        const newNote = { id: id,title: title, content: content };
        newNotes.push(newNote);
        this.setState({
            notes: newNotes
        });
    };

    render() {
        return (
            <div className="App">
                <div className='container'>
                    <div className="row">
                        <div className="col-3 left__side">
                            <h2 className='sidebar__header'>Lambda Notes</h2>
                            <a href='/' className='sidebar__button'>
                                View Notes
                            </a>
                            <a href='/createNewNote' className='sidebar__button'>
                                +Create New Note
                            </a>
                        </div>
                        <Switch>
                            <Route exact path='/' render={() => <NoteList notes={this.state.notes}/>}/>
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
