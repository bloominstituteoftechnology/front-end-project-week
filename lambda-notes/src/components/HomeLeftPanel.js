import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { CSVLink } from 'react-csv';
// import { Button } from 'reactstrap';

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
  console.log('HLP this.props', props)
  return (
    <StyledHLP>
      <div className="HLP__heading">
        <div className="heading"> Lambda <br/> Notes </div>
      </div>
      <div className="button-links">
      <Link to="/">
        <button> View Your Notes </button>
      </Link>
      <Link to="/create-new-note/">
        <button> + Create New Note </button>
      </Link>
      <CSVLink 
        className="csv-link" 
        data={props.notes} filename={"lambda-notes.csv"}
        ><button>Download CSV</button>
      </CSVLink>
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
