import React from "react";
import Axios from "axios";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {}
    };
  }

  componentDidMount() {
    Axios.get(
      `http://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`
    )
      .then(response => this.setState({ note: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h1>{this.state.note.title}</h1>
      </div>
    );
  }
}

export default Note;

// import React from "react";

// function Note(props) {
//   console.log(props.notes.id);

//   const id = props.match.params.id;
//   const singleUser = props.notes.find(user => user.id === id);
//   console.log("single user:" + singleUser);

//   console.log(id);
//   return (
//     <div>
//     <h1>{}</h1>
//     </div>
//   );
// }

// export default Note;
