import React from 'react';
import '../css/search.css';

import { NavLink } from 'react-router-dom';
import { Card } from '@blueprintjs/core';

const Search = props => {
	return (
		<div className="searchPage">
			<nav class="bp3-navbar .modifier">
				<div class="bp3-navbar-group bp3-align-left">
					<input
						class="bp3-input"
						placeholder="Search files..."
						type="text"
						name="search"
						value={props.search}
						onChange={props.changeHandler}
					/>
				</div>
			</nav>
			{props.notes.map((note, index) => (
				<div className="searchedNote" key={index}>
					<NavLink to={`/notes/${note._id}`}>
						<Card style={{ width: 50 + `%` }}>{note.title}</Card>
					</NavLink>
				</div>
			))}
		</div>
	);
};

export default Search;
