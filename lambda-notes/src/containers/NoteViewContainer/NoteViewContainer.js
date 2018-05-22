import React, {
  Component
} from 'react';
import NoteView from '../../components/Main/NoteView/NoteView';
import Aside from '../../components/Aside/Aside';

class NoteViewContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <Aside />
        <NoteView />
      </div>  
    );
  }
}

export default NoteViewContainer;