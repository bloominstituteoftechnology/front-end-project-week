import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

class Menu extends Component {


	render() {
		return (
			<div className='menu'>
				<h1 className='lambda-notes'>
					<p>Lambda</p> 
					<p>Notes</p>
				</h1>
				<div className='menu-buttons'>
					<Link to='/' className='link'>
						<div className='button'>
							View Your Notes
						</div>
					</Link>
					<Link to='/notes/form' className='link'>
						<div className='button'>
							+ Create New Notes
						</div>
					</Link>
				</div>
			</div>
		)
	}
}

export default Menu;