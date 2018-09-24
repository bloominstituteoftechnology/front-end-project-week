import React, { Component } from 'react';
import './OneNote.css';

class OneNote extends Component {
constructor(props){
super(props);
this.state={
deleting:false
}
}

deleteToggle = () => {
let opposite = !this.state.deleting
this.setState({deleting:opposite});
console.log(this.state);
}
	
render(){
return(
<div className="overall">
<div className="flex">
<div className="option" onClick={()=>this.props.editNote(this.props.index)}>edit</div>
<div className="option" onClick={()=>this.deleteToggle()}>delete</div>
</div>
<div className="contents">
<div className="title">{this.props.note.title}</div>
<div>{this.props.note.content}</div>
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