import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './styles/App.css';import './App.css';
import { fetchData, addNote} from './actions';
import NotesList from './components/NotesList';
import NoteForm from './components/NoteForm';

class App extends Component {

  state = {
    inputData: {
      tags: [],
      title: '',
      textBody: '',
    },
  };

  componentDidMount() {
    this.props.fetchData();
  }
  
  handleInput = (event) => {
    this.setState({
      inputData: {
        ...this.state.inputData,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleAdd = (event) => {
    event.preventDefault();
    this.props.addNote(this.state.inputData);
    this.resetForm();
  };

  resetForm() {
    this.setState({
      inputData: {
        tags: [],
        title: '',
        textBody: '',
      },
    });
  }

  render() {
    return (
      <div className="App">
        {!this.props.dataFetched ? (
          <h1>Loading notes, please wait...</h1>
        ) : (
          <React.Fragment>
            <NoteForm
              inputData={this.state.inputData}
              handleInput={this.handleInput}
              handleAdd={this.handleAdd}
            />
            <NotesList notes={this.props.notes}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetchingData: state.fetchingData,
    dataFetched: state.dataFetched,
    addingNote: state.addingNote,
    updatingNote: state.updatingNote,
    notes: state.notes,
    error: state.error,
  };
};

export default connect(
  mapStateToProps,
  {
    fetchData,
    addNote,
  }
)(App);
