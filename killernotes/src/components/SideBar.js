import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { notEditing } from '../actions';
// import { notEditing, exportNotes } from '../actions';
import styled from 'styled-components';

const SideBarDiv = styled.div`
  height: 100%;
  width: 221px;
  position: fixed;
  z-index: 0;
  top: 16px;
  left: 11px;
  overflow-x: hidden;
  padding-top: 20px;
  background-color: #d8d8d8;
  border: 1px solid rgb(151, 151, 151);
`;

const Text = styled.p`
  font-family: Roboto;
  font-size: 36px;
  line-height: 1;
  margin-left: 13px;
  margin-top: -4px;
`;

const ViewButton = styled.button`
  background-color: #2bc1c4;
  color: #fff;
  margin-top: -13px;
  margin-left: 13px;
  width: 193px;
  height: 44px;
  font-size: 16px;
`;

const NewButton = ViewButton.extend`
  margin-top: 18px;
`;

const ExportNotes = ViewButton.extend`
  margin-top: 18px;
`;

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CSV: 'Title%2CBody%0A',
    };
  }

  addNote = () => {
    this.props.notEditing();
  };

  exportNotes = () => {
    // %2C === ,
    // %0A === linefeed
    // field1%2Cfield2%0Afoo%2Cbar%0Agoo%2Cgai%0A
    var updatedCSV = this.state.CSV;
    for (let i = 0; i < this.props.notes.length; i++) {
      updatedCSV +=
        this.props.notes[i].title + '%2C' + this.props.notes[i].content + '%0A';
    }
    this.setState({ CSV: updatedCSV });
  };

  render() {
    return (
      <SideBarDiv>
        <Text>Lambda Notes</Text>
        <Link to="/notes">
          <ViewButton>View Your Notes</ViewButton>
        </Link>
        <Link to="/add">
          <NewButton onClick={this.addNote}>+Create New Note</NewButton>
        </Link>
        <ExportNotes onClick={this.exportNotes}>Export Notes</ExportNotes>
        <br />
        <a
          href={`data:application/octet-stream,${this.state.CSV}`}
          style={{ marginLeft: '40px' }}
        >
          Click to download
        </a>
      </SideBarDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(
  mapStateToProps,
  { notEditing },
)(SideBar);
