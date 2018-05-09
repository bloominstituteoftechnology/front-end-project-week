import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default class AddFriend extends Component {
// constructor(props){
//     super(props);
//     this.state = {
//         note: "",
//         title: "",
//         content: ""
    
//     };
// }

// componentDidMount(){
//      this.handleSubmit();
// }

// handleChange = event => {
//     this.setState({[event.target.name]: event.target.value});
//        };

// handleSubmit = id => {
//     const note ={};
//     if ( this.state.title !== "") {
//         note.title = this.state.title;
//     }
//     if ( this.state.content !== ""){
//         note.content = this.state.content;
//     }
//     axios
//     .put(`http://localhost:5000/notes/${id}`, note)
//     .then(response => {
//         console.log(this.props.note);
//         this.props.getNotes();
    
//       })
//       .catch(err => {
//         console.error(err);
//       });

//     this.setState({ title: "", content: "" });
//   };
//     getNotes = () => {
//     axios
//       .get(`http://localhost:5000/notes`)
//       .then(response => {
//         console.log('response:', response);
//         this.setState({ notes: response.data });
//       })
//       .catch(error => {
//         console.error("Error getting notes!", error);
//       });
//   };

  /*try 2*/

// constructor(props) {
//     super(props);
//     const { note} = props;

// this.state = {
//     title: note.title,
//     content: note.content,
//     id: note.id
// }
// }

// handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

// handleSubmit = e => {
//      const { title, content, id } = this.state;
//      e.preventDefault();
//     this.updateNote({ title, content, id });
//     this.setState({ title: "", content: "" });
// }
//     updateNote = note => {
//   return dispatch => {
//     axios.put(`http://localhost:5000/notes/${note.id}`, note)
//       .then(response => dispatch({  notes: response.data }))
//       .catch(err => dispatch({
//          error: "ERROR UPDATING FRIEND"
//       }))
//     }
// }
 

/* try one */

state = {
    title: "",
    content: "",

};

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("id", this.props.match.params.id);
    axios
      .get(`http://localhost:5000/notes/${id}`)
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error("error", error);
      });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/notes", this.state)
      .then(response => console.log(response))
      .then(() => (window.location.href = "/"))
      .catch(error => console.log(error));
  };

  render() {
      return <div>
          {console.log("looking for note", this.props)}
          <form onSubmit={this.handleSubmit}>
            {/* <form onSubmit = {() =>
                    this.handleSubmit(this.props.location.state.note)
                    } > */}
            <div>
              <input type="text" name="title" placeholder="Title" onChange={this.handleChange} value={this.state.title} />
            </div>
            <div>
              <textarea name="content" placeholder="Content" onChange={this.handleChange} value={this.state.content} />
            </div>
            <Link to="/">
              <button type="submit">Update</button>
            </Link>
          </form>
        </div>;
  }
}
    
