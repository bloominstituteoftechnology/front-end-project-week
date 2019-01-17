import React, {
  Component
} from 'react';
import Notes from '../../components/Main/Notes/Notes';
import Aside from '../../components/Aside/Aside';

// import { Route } from 'react-router-dom';
// import CreateNewViewContainer from './CreateNewViewContainer';

class ListViewContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}  
  }
  
  render() {
    console.log('listviewcontainer', this.props.notes);
    return (
      <div>
        <Aside />
        {/* <Route exact path="/" render={(props) => <Notes {...props} notes={this.state.notes}/>} /> */}
        <Notes notes={this.props.notes} />
        {/* <Route path="/create-new-note" component={CreateNewViewContainer} />  */}
      </div>  
    );
  }
}

export default ListViewContainer;