import React, { Component } from 'react';
import './OneNote.css';
import Modal from './Modal';

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
<div className="overall oneNote">
<div className="flex">
<div className="option" onClick={()=>this.editQuerry()}>edit</div>
<div className="option" onClick={()=>this.deleteQuerry()}>delete</div>
</div>
<div className="contents">
<div className="title m_bottom">{this.props.note.title}</div>
<div>{this.props.note.content}</div>
<br/>
<div>By:{this.props.note.poster}</div>
<br/>
</div>
{this.state.deleting ? (
<Modal deleteNote={this.props.deleteNote} deleteToggle={this.deleteToggle} />
):(
null	
)
}
</div>
);}
}

export default OneNote;