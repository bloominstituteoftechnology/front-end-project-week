import React, { Component } from 'react';
import Title from '../Title';
import NoteForm from '../NoteForm';
import Button from '../Button';

class SaveNote extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="save-note">
        <Title title={this.props.title} />
        <NoteForm />
        <Button type="primary" title="Save" link="/" />
      </div>
    );
  }
}
 
export default SaveNote;