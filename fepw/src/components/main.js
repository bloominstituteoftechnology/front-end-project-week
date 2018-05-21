import React, { Component } from 'react';
import CreateNote from '/CreateView.js';
import EditNote from '/EditNote.js';
import ListView from '/ListView.js';
import { Route } from 'react-router-dom';

class Main extends Component {
	constructor() {
		super();
		this.state = {
			cards: [],
			addNote: {
				title:'',
				content:''
			}
		}
	}
}
