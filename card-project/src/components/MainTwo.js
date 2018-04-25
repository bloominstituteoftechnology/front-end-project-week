import React from 'react';
// import PresentationMain from './PresentationMain';

const Renderer = (props) => {
	console.log('Fn component', this.props);
	return (
        // <h3>{props}</h3>
        <div>
        <h4>{props.note.title}</h4>
        <h6>{props.note.note}</h6>
        {console.log('inside of Renderer',props.note.title)}
        </div>
		// <h1>{this.props.notes.map(val => <h3>{val}</h3>)}</h1>
	);
};
export default Renderer;