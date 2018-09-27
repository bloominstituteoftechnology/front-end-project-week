import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { YourNotes, Sidebar, Forms, ViewNote } from '../Container/';
import { collectNotes, assembleNote, reviseNote, expungeNote } from '../../Store/Actions';
import { Container, NotesMain } from '../Styles';
import { BasicLayout } from '../Container/grid';
import { Header } from '../Presentational/Header';
import showdown from 'showdown';

class App extends Component {
  state = { 
    note: {
      title: '',
      textBody: ''
    },
    sidebar: {
      sidebarSearch: ' '
    }
  } 

  componentDidMount() {
    this.props.collectNotes();
    }

    handleInput = (e) => {
      this.setState({
          note: {...this.state.note, [e.currentTarget.name]: e.currentTarget.value}
      })
  }

  handleSearchInput = (e) => {
    this.setState({
      sidebar: {...this.state.sidebar, [e.currentTarget.previousSibling.name]: e.currentTarget.previousSibling.value}
    });
  }

  searchClear = (e) => {
    if(!e.currentTarget.value) {
      this.setState({
        sidebar: {...this.state.sidebar, [e.currentTarget.name]: e.currentTarget.value}
      });
    }
  }

   downloadObjectAsJson(exportObj, exportName){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  
  downloadObjectAsCSV(exportObj, exportName){
    const items = exportObj;
    const replacer = (key, value) => value === null ? '' : value;
    const header = Object.keys(items[0]).slice(1, Object.keys(items[0]).length);
    let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    csv = csv.join('\r\n');

    var dataStr = "data:text/csv;charset=UTF-8," + encodeURIComponent(csv);
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".csv");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  render() {

    return (
      <div className="App">
        <Container>
        <Sidebar 
          notes={this.props.notes} 
          expungeNote={this.props.expungeNote} 
          downloadObjectAsJson={this.downloadObjectAsJson} 
          downloadObjectAsCSV={this.downloadObjectAsCSV} 
          collectNotes={this.props.collectNotes} 
          handleSearchInput={this.handleSearchInput} 
          searchClear={this.searchClear}
        />

       <NotesMain>
          <Header 
            assembleNote={this.props.assembleNote} 
            note={this.state.note} 
            handleInput={this.handleInput}
          />

          <Route path="/forms/:form" render= { props => (
            <Forms {...props} 
            assembleNote={this.props.assembleNote} 
            reviseNote={this.props.reviseNote}
            />
          )}/>

          <Route path="/notes" render= { props => (
            <YourNotes 
            {...props} 
            notes={this.props.notes} 
            collectNotes={this.props.collectNotes} 
            showdown={showdown} 
            currentSearch={this.state.sidebar}
            />
          )}/>

          <Route path="/notes/note/:id" render= {
          props => (
            <ViewNote 
            {...props} 
            notes={this.props.notes} 
            collectNotes={this.props.collectNotes} 
            expungeNote={this.props.expungeNote} 
            reviseNote={this.props.reviseNote}  
            />
          )}/>

          <Route path="/basic" render= {
          props => (<BasicLayout notes={this.props.notes} />)}/>
        </NotesMain>
        </Container>

      </div>
    );
  }
}

const connectStateToProps = state => ({
  notes: state.notes
})

export default withRouter(connect(connectStateToProps, { collectNotes, assembleNote, reviseNote, expungeNote })(App));
