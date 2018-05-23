import React from 'react';
import Sidebar from './Sidebar/sidebar';

class CreateNote extends React.Component {
    constructor(props) {
      super(props);
      this.state = {valueTitle: '',
      valueBody:''};
  
      this.handleChangeTitle = this.handleChangeTitle.bind(this);
      this.handleChangeBody = this.handleChangeBody.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeTitle(event) {
      this.setState({valueTitle: event.target.value});
    }

    handleChangeBody(event) {
        this.setState({valueBody: event.target.value});
      }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.valueTitle);
      event.preventDefault();
    }
  
    render() {
      return (
            <div>
            <Sidebar />
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChangeTitle} />
            <input type="text" value={this.state.value} onChange={this.handleChangeBody} />
          </label>
          <input type="submit" value="Save" />
        </form>
            </div>
      );
    }
  }
  
  export default CreateNote