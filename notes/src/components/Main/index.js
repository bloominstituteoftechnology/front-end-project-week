import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

import ListView from '../ListView';


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      fetching: false,
      fetched: false
    }
  }

  componentDidMount() {

      // set State to fetching if no notes list is present
      this.setState({ fetching: true })

    // make an API call to get notes
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
         .then(res => {
           this.setState({
             notes: res.data,
             fetching: false,
             fetched: true
           })
         })
  }

  render() {
    return (
      <section>
        Main
        {this.state.fetching ? <p className='loading'>Loading Notes...</p> : null }

        <Route path='/' render={(props) => <ListView notes={this.state.notes} />} />
      </section>
    );
  }
}

export default Main;
