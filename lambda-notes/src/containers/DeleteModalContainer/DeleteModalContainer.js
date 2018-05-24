import React, {
  Component
} from 'react';
import DeleteModal from '../../components/Main/DeleteModal/DeleteModal';
import Aside from '../../components/Aside/Aside';
import NoteView from '../../components/Main/NoteView/NoteView';

class DeleteModalContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    console.log('props', this.props);
    return (
      <div>
        <Aside />
        <NoteView />
        <DeleteModal />
      </div>  
    );
  }
}

export default DeleteModalContainer;