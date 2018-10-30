import React from 'react';
// import Notes from './Notes';

const FullNote = ({ match }) => {
	return (
		<div>
			<h1>Heeeeeeeeeeeeeeeello World!!!!!! {match.params.title}</h1>
			{/* <Route path={`/note/${this.props.match.id}`} render={(props) => <Notes {...props} />} /> */}
		</div>
	);
};

export default FullNote;
