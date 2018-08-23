import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const NoteCard = ({ note }) => {
	return (
		<Link key={note._id} className="Notes" to={`/notes/${note._id}`}>
			<div key={note._id}>
				<h4 className="Notes__title">
					{note.title.length > 20
						? note.title.substring(0, 20) + "..."
						: note.title}
				</h4>
				{note.tags.map(tag => (
					<span className="Notes__tag">{tag}</span>
				))}
				<ReactMarkdown
					className="Notes__text"
					source={
						note.textBody.length > 170
							? note.textBody.substring(0, 170) + "..."
							: note.textBody
					}
				/>
			</div>
		</Link>
	);
};

export default NoteCard;
