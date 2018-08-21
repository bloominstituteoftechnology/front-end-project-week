import React, { Component } from 'react';
import SideNav from './components/SideNav';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import ListView from './components/ListView';
import NotesForm from './components/NotesForm';
import { SecondaryHeading } from './styles';
import NoteView from './components/NoteView';
import ListContainer from './containers/ListContainer';

const MainContent = styled.div`
  padding: 4rem;
`;

const textBody = `Lorem ipsum dolor sit amet, at essent consequat mediocritatem nam, sea an rebum graecis. His autem simul percipitur ne. Quod eirmod suavitate ne vix, sed eu detracto antiopam. Ad putent quaerendum scriptorem eos, est id principes consetetur. Ornatus nominavi vis te, at vel possit oportere argumentum. Semper evertitur pri id. Dolorum complectitur ad vim, at sea pertinax moderatius inciderint, reque etiam mel ei. In mea congue eripuit phaedrum, vix eros ignota eirmod ne. Vel lorem putent reprehendunt te. Usu ad debitis antiopam, mel aeque moderatius eu.

Nec id omnium audiam, est alienum expetendis eu. Id vitae ridens causae sit. Quidam invenire voluptaria qui an. Consul mandamus consectetuer in vel, mel ei disputando repudiandae. Ex mei aperiam fastidii, et usu velit accumsan.At brute aliquando moderatius sea, ut electram gloriatur eos. Ut graece libris mel. Ut ius solum viris eleifend. Ea vis fierent torquatos, soleat persecuti vis te. Ne putant everti democritum sea, ius ut assum disputando, volumus adipiscing ut usu. Per no omnis volumus lucilius.`;

class App extends Component {
  state = {
    notes: [
      {
        id: 0,
        title: 'Note 1',
        textBody,
      },
      {
        id: 1,
        title: 'Note 2',
        textBody,
      },
      {
        id: 2,
        title: 'Note 3',
        textBody,
      },
    ],
  };

  createNote = data =>
    this.setState(({ notes }) => ({
      notes: [
        ...notes,
        {
          id: notes.length,
          ...data,
        },
      ],
    }));

  editNote = id => data =>
    this.setState(({ notes }) => ({
      notes: notes.map(
        note =>
          note.id === id
            ? {
                ...note,
                ...data,
              }
            : note,
      ),
    }));

  deleteNote = id =>
    this.setState(({ notes }) => ({
      notes: notes.filter(note => note.id !== id),
    }));

  render() {
    return (
      <div>
        <SideNav />
        <MainContent>
          <Switch>
            <Route
              exact
              path="/"
              // render={() => <ListView notes={this.state.notes} />}
              component={ListContainer}
            />
            <Route
              exact
              path="/notes/new"
              render={props => (
                <div>
                  <SecondaryHeading>Create New Note</SecondaryHeading>
                  <NotesForm {...props} onFormSubmit={this.createNote} />
                </div>
              )}
            />
            <Route
              exact
              path="/notes/:id/edit"
              render={props => (
                <div>
                  <SecondaryHeading>Edit Post</SecondaryHeading>
                  <NotesForm
                    {...props}
                    onFormSubmit={this.editNote(Number(props.match.params.id))}
                  />
                </div>
              )}
            />
            <Route
              exact
              path="/notes/:id"
              render={props => (
                <NoteView
                  note={this.state.notes.find(
                    note => note.id === Number(props.match.params.id),
                  )}
                  onDelete={this.deleteNote}
                  {...props}
                />
              )}
            />
          </Switch>
        </MainContent>
      </div>
    );
  }
}

export default App;
