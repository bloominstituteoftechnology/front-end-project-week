import React, { Component } from 'react';
import './App.css';
import Main from './components/main.js';
import { Route } from 'react-router-dom';
import Sidebar from './components/sidebar.js';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
	
render() {
    return (
	<Route path ='/'>
		<div>
			<Container>
				<Row>
					<Col sm="3">
						<div><Sidebar /></div>
					</Col>
					<Col sm="9">
						<div classname='col-9'><Main /></div>
					</Col>
				</Row>
			</Container>
		</div>
	</Route>
    );
  }
}

export default App;

//22 May Figured this should be where I layout the main components that everything else feeds into - Main and Sidebar. Started trying to style it but it look right yet. Will start working on that next.
