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
    console.log('NoteViewContainer', this.props.match)
    return (
      <div>
        <Aside />
        <NoteView notes={this.props}/>
      </div>  
    );
  }
}

export default NoteViewContainer; 