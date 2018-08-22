import React from "react";
import { Link } from "react-router-dom";

const Tags = ({ notes }) => {
	let tagsSet = new Set(
		notes.reduce((acc, next) => [...acc, ...next.tags], []),
	);
	let tagsArray = Array.from(tagsSet);
	return (
		<div className="Notes__tabNav">
			{tagsArray.map(tag => (
				<Link to={`tags/${tag}`}>
					<span className="Notes__tag Notes__tag--sort">{tag}</span>
				</Link>
			))}
		</div>
	);
};

export default Tags;
