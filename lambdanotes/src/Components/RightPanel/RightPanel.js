import React, { Component } from 'react';

import { Label } from '../AtomComps/Label';
import { List } from '../MoleculeComps/List';

export default class RightPanel extends Component {
  render() {
    return (
      <div>
        <Label fontSize="20px" name="Your Notes:" />
        <List getNoteInfo={this.props.getNoteInfo} notes={this.props.notes} />
      </div>
    );
  }
}
