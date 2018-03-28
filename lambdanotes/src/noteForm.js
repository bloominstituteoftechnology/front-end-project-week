
import React, { Component } from 'react';


class noteForm extends Component {
 constructor(props) {
 super(props);
 this.state = { title: '', content: '' };
 this.handleTitleChange = this.handleTitleChange.bind(this);
 this.handleContentChange = this.handleContentChange.bind(this);
 this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleTitleChange(e) {
 this.setState({ title: e.target.value });
 }
 handleContentChange(e) {
 this.setState({ content: e.target.value });
 }
 handleSubmit(e) {
 e.preventDefault();
 console.log(`${this.state.title} and “${this.state.content}”`)

 }
 render() {
 return (
 <form style={ noteForm } onSubmit={ this.handleSubmit }>
 <input
 type='text'
 placeholder='Title…'
 style={ style.commentFormTitle}
 value={ this.state.title }
 onChange={ this.handleContentChange } />


// <input
// type='submit'
// style={ style.commentFormPost }
// value=’Post’ />
// </form>
 

 )
 }
}

export default noteForm;