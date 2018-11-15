import React, { Component } from 'react';

export default class NoteForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
  
      };
  
    }
  
  
    render() {
      return (
        <div className="formdiv">
        <form>
          <input type="text" onChange={this.props.value} />
          <input type="submit" value="Submit" onClick={this.props.submit} />
          
        </form>
        </div>
      );
    }
  }
  




