import React from 'react';
import {NotesData} from '../NotesData';
import { Sidebar, NotesList } from '../components'

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    }
  }

  componentDidMount() {
    this.setState({
      notes: NotesData
    })
  }
  render() {
    return(
      <div className='container'>
      <h1>List View</h1>
      <Sidebar />
      <NotesList notes={this.state.notes} />
      </div>
    )
  }
}

export default ListView;
