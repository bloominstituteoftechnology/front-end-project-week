import React from "react";
import styled from "styled-components";
import HeadingTitle from "../common/Titles/HeadingTitle";
import "bulma/css/bulma.css";
import "../styles/custom-props.css";
const HomeWrapper = styled.div``;

const Card = styled.div`
  height: 250px;
  padding: 10px 20px;
  border: 1px solid var(--main-border-color);
  background: white;
  overflow: hidden;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  text-transform: "capitalize";
  border-bottom: 2px solid var(--main-border-color);
  padding-bottom: 0.5rem;
`;

const CardContent = styled.p`
  font-weight: 200;
  padding: 0.5rem 0;
  `;
const HomeComponent = props => {
  return (
    <HomeWrapper>
      <HeadingTitle>Your Notes:</HeadingTitle>
      <div className="columns is-multiline">
        <div className="column is-one-third">
          <Card />
        </div>{" "}
        {/*column*/}
        <div className="column is-one-third">
          <Card />
        </div>{" "}
        {/*column*/}
        <div className="column is-one-third">
          <Card>
            <CardTitle>Note Title</CardTitle>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              error a labore ullam quas quia adipisci, facilis maiores rerum
              veniam earum sunt, culpa laborum ea quos ipsa laudantium.
              Praesentium, numquam!
            </CardContent>
          </Card>
        </div>{" "}
        {/*column*/}
      </div>{" "}
      {/*columns*/}
    </HomeWrapper>
  );
};

export default HomeComponent;
