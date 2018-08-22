import React from "react";
import { Link } from "react-router-dom";

const Tags = ({ notes }) => {
	let tagsSet = new Set(
		notes.reduce((acc, next) => [...acc, ...next.tags], []),
	);
	let tagsArray = Array.from(tagsSet);

	console.log(tagsArray);
	return (
		<div className="Notes__tabNav">
			{tagsArray.map(tag => (
				<span className="Notes__tag Notes__tag--sort">{tag}</span>
			))}
		</div>
	);
};

export default Tags;
