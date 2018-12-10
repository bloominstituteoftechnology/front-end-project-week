import React from "react";
import { Link } from "react-router-dom";

import { Container, Wrapper, Heading, Button } from "./Styles";

const NavigationBar = () => {
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
      </Wrapper>
    </Container>
  );
};

export default NavigationBar;
