import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions';


class App extends Component {

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className={'appContainer'}>
        <div className={'toolBar'} ></div>
        <div className={'Notes'}>
        {
          !this.props.notes.length 
            ? (<h2>Loading Notes ...</h2>)
            : this.props.notes.map(note => {
                return (<div key={note.key}>{note.textBody}</div>);
              })
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { notes } = state;
  return { notes };
}

export default connect(mapStateToProps, { getNotes })(App);
