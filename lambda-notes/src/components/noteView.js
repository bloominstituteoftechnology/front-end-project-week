import React, { Component } from 'react';
import axios from 'axios';
import loremipsem from '../loremipsem.js'

class NotView extends Component {
    state = {
        listOfNotes: [];
    }
}

componentDidMount() {
    this.setState({ noteList: loremipsem });
}