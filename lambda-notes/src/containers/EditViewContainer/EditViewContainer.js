import React, {
  Component
} from 'react';
import EditView from '../../components/Main/EditView/EditView';
import Aside from '../../components/Aside/Aside';

class EditViewContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <Aside />
        <EditView />
      </div>  
    );
  }
}

export default EditViewContainer;