import React from 'react';
import './form.css';

const Form = (props) => {
if(props.editing===true){
return(
	<div className="form">
	<div className="header forum">
	Create New Note:
	</div>
	<textarea value={props.title} placeholder='Note Title' onChange={(e) => props.changeTitle(e.target.value)} />
	<textarea value={props.content} placeholder='Note Content' className='content'
	onChange={(e) => props.changeContent(e.target.value)} />
	<div className="button Bform" onClick={() => props.submitEdit({title:props.title,content:props.content})}>
	submit!
	</div>
	</div>
		);
}
else{
return(
	<div className="form">
	<div className="header forum">
	Create New Note:
	</div>
	<textarea value={props.title} placeholder='Note Title' onChange={(e) => props.changeTitle(e.target.value)} />
	<textarea value={props.content} placeholder='Note Content' className='content'
	onChange={(e) => props.changeContent(e.target.value)} />
	<div className="button Bform" onClick={() => props.submitNote({title:props.title,content:props.content})}>
	submit!
	</div>
	</div>
	);
}
}

export default Form;