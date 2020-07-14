import React, { Component } from 'react';

 class noteForm extends Component {
     constructor() {
         super();
         this.state = {
             title: '',
             text: '',
             id: null,
             editing: false
         }
     }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})  
      }
    
    handleSubmit = (e) => {
        const {title, text} = this.state;
        this.setState(
            {
                title: this.state.title,
                text: this.state.text
    }
);
}

  render() {
    return (
      <div>
        <form onSubmit={this.handle}>
            <input value={this.state.text} name = 'title'/>
            <textarea onChange={this.handleChange} name.></textarea>
        </form>
      </div>
    )
  }
};

export default noteForm;