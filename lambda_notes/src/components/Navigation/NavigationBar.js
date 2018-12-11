import React from "react";
import { Link } from "react-router-dom";

import { Container, Wrapper, Heading, Button } from "./Styles";

const NavigationBar = props => {
  return (
    <Container>
      <Wrapper>
        <Heading>Lambda Notes</Heading>
        <Link exact="true" to="/" style={{ width: "100%" }}>
          <Button type="button">View Your Notes</Button>
        </Link>
        <Link to="/create" style={{ width: "100%" }}>
          <Button type="button">+ Create New Note</Button>
        </Link>
        <Link to="/login" style={{ width: "100%" }}>
          <Button type="button" onClick={props.logOut}>
            Log Out
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default NavigationBar;
