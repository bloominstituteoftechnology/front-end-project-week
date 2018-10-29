import React from "react";
import { Route } from "react-router-dom";

import { Container } from "../styles";

import Navigation from "../components/Navigation";
import NoteContainer from "./NoteContainer";
import Note from "../components/Note";

const App = () => (
  <Container>
    <Navigation />
    <Route exact path="/notes" component={NoteContainer} />
    <Route path="/notes/:id" component={Note} />
  </Container>
);

export default App;
