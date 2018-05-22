import React, {
  Component
} from 'react';
import CreateNewView from '../../components/Main/CreateNewView/CreateNewView';
import Aside from '../../components/Aside/Aside';

class CreateNewViewContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    
    }
  }

  render() {
    return (
      <div>
        <Aside />
        <CreateNewView />
      </div>  
    );
  }
}

export default CreateNewViewContainer;