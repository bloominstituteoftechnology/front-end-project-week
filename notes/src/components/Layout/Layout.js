import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Route } from "react-router-dom";
import styled from "styled-components";
import VerticalNav from "./VerticalNav/VerticalNav";
import Notes from "./Notes/Notes";
import NewNoteForm from "./NewNoteForm/NewNoteForm";
import Note from "./Note/Note";
import EditNoteForm from "./EditNoteForm/EditNoteForm";

export default class Layout extends React.Component {
  render() {
    const StyleGuide = styled(Container)`
      * {
        font-family: "Raleway", sans-serif;
        border-color: #979797;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: "Roboto", sans-serif;
        color: #4a4a4a;
      }
      p,
      a {
        color: #4a4a4a;
      }
    `;
    const Sidebar = styled(Col)`
      background-color: #d8d8d8;
    `;
    const Main = styled(Col)`
      background-color: #f3f3f3;
    `;
    return (
      <StyleGuide>
        <Row>
          <Sidebar md="3">
            <VerticalNav />
          </Sidebar>
          <Main md="9">
            <Route exact path="/" component={Notes} />
            <Route exact path="/notes" component={Notes} />
            <Route path="/create" component={NewNoteForm} />
            <Route path="/notes/:id" component={Note} />
            <Route path="/edit/:id" component={EditNoteForm} />
          </Main>
        </Row>
      </StyleGuide>
    );
  }
}
