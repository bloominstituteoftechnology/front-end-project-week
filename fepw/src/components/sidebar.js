import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';


class Sidebar extends Component {
	render() {
		return(
			<nav className="sidebar">
				<Container>
					<Row>
						<Col xs="3">
				<h2>Lambda<br />Notes</h2>
				<Link to='/'>
					<button>View Your Notes</button>
				</Link>

				<Link to='/CreateNote'>
					<button>+ Create New Note</button>
				</Link>
						</Col>
					</Row>
				</Container>
			</nav>
		)
	}
}

export default Sidebar;

//22May created this today but it's looking pretty ugly so there will be some styling later
