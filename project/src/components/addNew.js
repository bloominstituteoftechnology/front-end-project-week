import React, { Component } from 'react';
import './addNew.css';

class AddNew extends Component {
constructor(props){
super(props);
this.state={
title:'',
contents:''
}
}

componentDidMount(){
if(this.props.editing || this.props.editing===0){
this.setState({title:this.props.notes[this.props.editing].title,contents:this.props.notes[this.props.editing].content})
}
}

changeHandler = (e) => {
this.setState({[e.target.name]:e.target.value});
}

submitQuerry = (e) => {
e.preventDefault();
if(this.state.title&&this.state.contents){this.props.createNote(this.state.title,this.state.contents);}
else{alert('Need a title and contents!')}
}

editQuerry = (e) => {
e.preventDefault();
if(this.state.title&&this.state.contents){this.props.edit(this.state.title,this.state.contents);}
else{alert('Need a title and contents!')}
}

render(){
if(this.props.editing || this.props.editing===0){
return(
<div className="overall">
<div>Create New Note:</div>
<form onSubmit={this.editQuerry}>
<input placeholder="New Title" name="title" value={this.state.title} onChange={(e)=>this.changeHandler(e)} />
<input className="large" placeholder="New Content" name="contents" value={this.state.contents} onChange={(e)=>this.changeHandler(e)} />
<input className="button submit" type="submit" value="update" />
</form>
</div>
)	
}
else{
return(
<div className="overall">
<div>Create New Note:</div>
<form onSubmit={this.submitQuerry}>
<input placeholder="New Title" name="title" value={this.state.title} onChange={(e)=>this.changeHandler(e)} />
<input className="large" placeholder="New Content" name="contents" value={this.state.contents} onChange={(e)=>this.changeHandler(e)} />
<input className="button submit" type="submit" value="save" />
</form>
</div>
)}
}

}

export default AddNew;