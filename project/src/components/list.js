import React from 'react';

const List = (props) => {
	if(props.viewing===null){
	return(
<div className="posts">
	  { props.props.map(post => {
		  return(
		<div key={Math.random(Date.now())} className="card" onClick={() => props.viewNoteById(post.id)}>
			<div className="title">
			{post.title}
			</div>
			<div className="content">
			{post.content.length > 199 ? `${post.content.slice(0,199)}...` : post.content}
			</div>
		</div>
		
	  )})	}
      </div>
	  );
	}
	else{
	return (
	<div className="posts">
		<div className="title">
		{props.props[props.viewing].title}
		</div>
		<div className="content">
		{props.props[props.viewing].content}
		</div>
	</div>
		);	
	}
}

export default List;