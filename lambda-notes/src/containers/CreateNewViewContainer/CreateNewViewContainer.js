import React, {
  Component
} from 'react';
import CreateNewView from '../../components/Main/CreateNewView/CreateNewView';
import Aside from '../../components/Aside/Aside';

class CreateNewViewContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      message: '', 
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Aside />
        <CreateNewView
          addNote={(e) => this.props.addNote(e, this.state.title, this.state.message)}
          handleChange={this.handleChange}
        />
      </div>  
    );
  }
}

export default CreateNewViewContainer;