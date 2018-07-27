import React from 'react';
import './form.css';

const Form = (props) => {

return(
	<div className="form">
	<div className="header forum">
	Create New Note:
	</div>
	<textarea value={props.title} placeholder='Note Title' onChange={(e) => props.changeTitle(e.target.value)} />
	<textarea value={props.content} placeholder='Note Content' className='content'
	onChange={(e) => props.changeContent(e.target.value)} />
	<div className="button form">
	submit!
	</div>
	</div>
	);

}

export default Form;