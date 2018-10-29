import React from "react";
import { Container } from "../styles"
import NoteContainer from "./NoteContainer"
import Navigation from "../components/Navigation"

const App = () => (
  <Container>
    <Navigation />
    <NoteContainer />
  </Container>
);

export default App;
