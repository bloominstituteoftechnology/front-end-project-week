import React, { Component } from 'react';
import './OneNote.css';

class OneNote extends Component {
constructor(props){
super(props);
this.state={
deleting:false
}
}

deleteQuerry = () => {
if(this.props.note.poster===this.props.loggedIn || this.props.note.poster==="guest"){this.deleteToggle()}
else alert('you don\'t have permission to delete this post');
}

deleteToggle = () => {
let opposite = !this.state.deleting
this.setState({deleting:opposite});
}

editQuerry = () => {
if(this.props.note.poster===this.props.loggedIn || this.props.note.poster==="guest"){this.props.editNote(this.props.index)}
else alert('you don\'t have permission to edit this post');
}
	
render(){
return(
<div className="overall">
<div className="flex">
<div className="option" onClick={()=>this.editQuerry()}>edit</div>
<div className="option" onClick={()=>this.deleteQuerry()}>delete</div>
</div>
<div className="contents">
<div className="title">{this.props.note.title}</div>
<div>{this.props.note.content}</div>
<br/>
<div>By:{this.props.note.poster}</div>
</div>
{this.state.deleting ? (
<React.Fragment>
<div className="shade"></div>
<div className="popUp">
<div className="text">Are you sure you want to delete this?</div>
<div className="options">
<div className="select red" onClick={()=>this.props.deleteNote(this.props.index)}>Delete</div>
<div className="select" onClick={()=>this.deleteToggle()}>No</div>
</div>
</div>
</React.Fragment>
):(
null	
)
}
</div>
);}
}

export default OneNote;