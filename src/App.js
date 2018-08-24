import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import { fetchNotes } from './actions/index';
import { getAllNotes } from './reducers/index';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import styled from 'styled-components';
import SideBar from './components/SideBar';
import MainPane from './components/MainPane';
import breakpoints from './breakpoints';
import './App.css';

let StyledApp = styled.div`
  display: flex;
  justify-content: center;
  font-family: ${props => props.theme.font.body};

  @media(max-width: ${ breakpoints.verticalNav }) {
    flex-wrap: wrap;
  }

  * {
    box-sizing: border-box;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.exportCSV = this.exportCSV.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchNotes();
  }

  exportCSV() {
    // Prepare string
    const { notes: allNotes } = this.props;
    const dataSignature = 'data:text/csv;charset=utf-8,';
    const keys = allNotes.reduce((accum, note) => ({...accum, ...Object.keys(note)}), {});
    const keysArr = [...Object.values(keys)];
    let headingRow = keysArr.map( colTitle => `"${colTitle}"`).join(',');
    const rows = allNotes.map(
      note => (keysArr.reduce(
        (accum, key) => [...accum, `"${note[key]}"`],
        [])).join(','));
    const resultArr = [headingRow, ...rows];
    const resultStr = resultArr.join('\r\n');

    // Convert string to data then download
    const data = encodeURI(dataSignature+resultStr);
    const link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', 'my_data.csv');
    link.innerHTML= 'Click Here to download';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  render() {
    return (
      <StyledApp>
        <SideBar exportCSV={this.exportCSV} />
        <MainPane {...this.props} />
      </StyledApp>
    );
  }
}

const mapStateToProps = state => ({ notes: getAllNotes(state) });
export default withRouter(DragDropContext(HTML5Backend)(connect(
  mapStateToProps,
  { fetchNotes }
)(App)));
