import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import { Route } from "react-router-dom";
import AllNotes from "./components/AllNotes";
import axios from "axios";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

const MainContent = styled.div`
  padding: 4rem;
`;

const textBody = `Lorem ipsum dolor sit amet, at essent consequat mediocritatem nam, sea an rebum graecis. His autem simul percipitur ne. Quod eirmod suavitate ne vix, sed eu detracto antiopam. Ad putent quaerendum scriptorem eos, est id principes consetetur. Ornatus nominavi vis te, at vel possit oportere argumentum. Semper evertitur pri id. Dolorum complectitur ad vim, at sea pertinax moderatius inciderint, reque etiam mel ei. In mea congue eripuit phaedrum, vix eros ignota eirmod ne. Vel lorem putent reprehendunt te. Usu ad debitis antiopam, mel aeque moderatius eu.Nec id omnium audiam, est alienum expetendis eu. Id vitae ridens causae sit. Quidam invenire voluptaria qui an. Consul mandamus consectetuer in vel, mel ei disputando repudiandae. Ex mei aperiam fastidii, et usu velit accumsan.At brute aliquando moderatius sea, ut electram gloriatur eos. Ut graece libris mel. Ut ius solum viris eleifend. Ea vis fierent torquatos, soleat persecuti vis te. Ne putant everti democritum sea, ius ut assum disputando, volumus adipiscing ut usu. Per no omnis volumus lucilius.`;

class App extends Component {
  state = {
    notes: [
      {
        id: 0,
        title: "Note 1",
        textBody
      },
      {
        id: 1,
        title: "Note 2",
        textBody
      },
      {
        id: 2,
        title: "Note 3",
        textBody
      },
      {
        id: 4,
        title: "Note 4",
        textBody
      },
      {
        id: 5,
        title: "Note 5",
        textBody
      },
      {
        id: 6,
        title: "Note 6",
        textBody
      }
    ]
  };
  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
  }
  componentDidUpdate() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <MainContent>
          <Route
            exact
            path="/"
            render={() => <AllNotes notes={this.state.notes} />}
          />
        </MainContent>
        <Sidebar />
        <CreateNote />
      </div>
    );
  }
}

export default App;
