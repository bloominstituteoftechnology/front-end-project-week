import React from 'react';

const List = (props) => {
	return(
<div className="posts">
	  { props.props.map(post => {
		  return(
		<div key={Math.random(Date.now())} className="card">
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

export default List;