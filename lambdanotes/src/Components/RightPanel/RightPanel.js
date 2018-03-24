import React, { Component } from 'react';

import { Label } from '../AtomComps/Label';
import { List } from '../MoleculeComps/List';

export default class RightPanel extends Component {
  render() {
    return (
      <div>
        <Label fontSize="20px" name="Your Notes:" />
        <List cards={this.props.cards} />
      </div>
    );
  }
}
