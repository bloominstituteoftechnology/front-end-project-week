import React, { Component } from 'react';

/* EditNote/EditNote.js
 * Class used for editing a current note. I'd like to use a standard
 * form for both edit and create.
 */
class EditNote extends Component {
  constructor(props){
    super(props);

    this.state={
      note: [],
      newTitle: "",
      newText: "",
    };
  };

  componentDidMount(){};

  render() {};
};

export default EditNote;