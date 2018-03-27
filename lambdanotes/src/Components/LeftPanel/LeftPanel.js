import React, { Component } from 'react';
import { Label } from '../AtomComps/Label';
import { Button } from '../AtomComps/Button';
import * as Scroll from 'react-scroll';

let scroll = Scroll.animateScroll;

export default class LeftPanel extends Component {
  scrollToAddNotes = () => {
    scroll.scrollTo(2000);
    if (this.props.getNoteInfo) {
      this.props.getNoteInfo({ title: '', content: '' });
    }
    this.props.isUpdating(false);
    if (this.props.creatingNewNote) {
      this.props.creatingNewNote(true);
    }
  };
  scrollToViewNotes = () => {
    scroll.scrollTo(0);
    if (this.props.getNoteInfo) {
      setTimeout(() => {
        this.props.getNoteInfo({ title: '', content: '' });
      }, 500);
    }
    this.props.isUpdating(false);
  };

  render() {
    return (
      <div className="LeftPanelContents">
        <Label fontSize="45px" name="Lambda Notes" />
        <div onClick={this.scrollToViewNotes}>
          <Button btnName="View Your Notes" />
        </div>
        {this.props.updatingState ? (
          <div style={{ display: 'none' }} />
        ) : (
          <div onClick={this.scrollToAddNotes}>
            <Button btnName="+ Create New Note" />
          </div>
        )}
      </div>
    );
  }
}
