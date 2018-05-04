import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";


const StyledHLP = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  text-align: center;
  background: lavender;
  width: 27%;
  font-family: Roboto;

  .HLP__heading {
    text-align: left;
    font-size: 29px;
    font-weight: bold;
    margin-top: 18px;
    margin-bottom: 21px;
    margin-left: 14%;
    line-height: 1;
  }

  .add-heading {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 12px;
    width: 120px;
    line-height: 1.2;
    font-weight: bold;
    font-family: 'Kaushan Script', cursive;
    border: 2px dashed black;
    padding: 5px;

  }

  .button-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  button {
    font-size: 12px;
    width: 168px;
    height: 36px;
    margin-bottom: 20px;
    background: #2bc1c4;
  }
`;

const HomeLeftPanel = (props) => {
  return (
    <StyledHLP>
      <div className="HLP__heading">
        <div className="heading"> User <br/> Login </div>
      </div>
    </StyledHLP>
  );
};

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps, {})(HomeLeftPanel);
