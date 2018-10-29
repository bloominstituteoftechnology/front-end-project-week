import React from "react";
import { NotesData } from "../NotesData";
import { Sidebar, NoteList } from "../components";

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    this.setState({
      notes: NotesData
    });
  }
  render() {
    return (
      <div className="container">
        <Sidebar />
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}
export default ListView;
