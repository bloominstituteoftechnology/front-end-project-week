import React from 'react';
import Sidebar from './Sidebar/sidebar';

class CreateNote extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      valueTitle: '',
      valueBody:''};
  
      this.handleChangeTitle = this.handleChangeTitle.bind(this);
      this.handleChangeBody = this.handleChangeBody.bind(this);
      this.handleSubmitNote = this.handleSubmitNote.bind(this);
    }
  
    handleChangeTitle(e) {
      this.setState({valueTitle: e.target.value});
    }

    handleChangeBody(e) {
        this.setState({valueBody: e.target.value});
      }
  
    handleSubmitNote(e) {
      const newNote = this.state;
      this.props.notes.push(newNote);
      this.setState({
        valueTitle: '',
        valueBody:''
      })
      e.preventDefault();
    }
  
    render() {
      return (
            <div>
            <Sidebar />
            <br/>
            <br/>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input 
            type="text" 
            value={this.state.valueTitle} 
            onChange={this.handleChangeTitle} 
            placeholder="Note Title"
            />
            <br/>
            <br/>
            <input 
            type="text" 
            value={this.state.valueBody} 
            onChange={this.handleChangeBody} 
            placeholder="Note Content"  />
          </label>
          <br/>
          <br/>
          <button type="button" onClick={this.handleSubmitNote}>Save</button>
        </form>
            </div>
      );
    }
  }
  
  export default CreateNote