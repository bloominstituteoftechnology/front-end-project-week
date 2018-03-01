import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { toggleDelete } from '../actions';
import LeftRail from './leftrail';
import SectionTitle from './sectiontitle';
import TextBlock from './textblock';
import Delete from './delete';

const StyledNote = styled.div`
  display: flex;
  position: relative;
  .full-note__right {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 620px;
    min-height: 700px;
    padding: 20px;
    background-color: #f3f3f3;
  }

  .full-note__links {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    a {
      margin: 0 5px;
      font-family: Raleway, sans-serif;
      font-weight: 700;
      font-size: 1.2rem;
      color: #4a494a;      
    }
  }

  .full-note__card {
    width: 600px;
    margin-top: 20px;
    background-color: #fffeff;
    border: 1px solid #bfbfc0;  
    border-radius: 1px;
    h2 {
      margin-top: 15px;
    }
    p {
      margin-left: 10px;
      margin-bottom: 10px;
      font-size: 1rem;
    }
  }

`;

class FullNote extends React.Component {
  state = {
    redirect: false,
  }

  handleDeleteLink = (event) => {
    event.preventDefault();
    this.props.toggleDelete();
  }

  render() {
    return (
      <StyledNote >
        {this.props.deleteActive ? <Delete id={this.props.match.params.id} history={this.props.history}/> : null}
        <LeftRail />
        <div className='full-note__right'>
          <div className='full-note__links'>
            <Link to={`/updatenote/${this.props.match.params.id}`}>edit</Link>
            <a href='' onClick={this.handleDeleteLink}>delete</a>
          </div>
          <div className='full-note__card'>
            <SectionTitle name={this.props.notes.find(val => val.id.toString() === this.props.match.params.id).title} />
            <TextBlock body={this.props.notes.find(val => val.id.toString() === this.props.match.params.id).body} />
            <p>{this.props.notes.find(val => val.id.toString() === this.props.match.params.id).stamp}</p>
          </div>
        </div>
      </StyledNote>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    deleteActive: state.deleteActive,
    stamp: state.stamp,
  };
};

export default connect(mapStateToProps, { toggleDelete })(FullNote);
