import React, { Component } from 'react';
import SideNav from './components/SideNav';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import ListView from './components/ListView';
import NotesForm from './components/NotesForm';

const MainContent = styled.div`
  padding: 4rem;
`;

const SecondaryHeading = styled.h2`
  margin-bottom: 2rem;
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

  render() {
    return (
      <div>
        <SideNav />
        <MainContent>
          <Route
            exact
            path="/"
            render={() => <ListView notes={this.state.notes} />}
          />
          <Route
            exact
            path="/notes/new"
            render={() => (
              <div>
                <SecondaryHeading>Create New Note</SecondaryHeading>
                <NotesForm />
              </div>
            )}
          />
        </MainContent>
      </div>
    );
  }
}

export default App;
