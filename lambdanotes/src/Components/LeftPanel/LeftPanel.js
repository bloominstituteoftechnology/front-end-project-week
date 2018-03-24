import React, { Component } from 'react';
import { Label } from '../AtomComps/Label';
import { Button } from '../AtomComps/Button';

export default class LeftPanel extends Component {
  render() {
    return (
      <div className="LeftPanelContents">
        <Label fontSize="45px" name="Lambda Notes" />
        <Button btnName="View Your Notes" />
        <Button btnName="+ Create New Note" />
      </div>
    );
  }
}
