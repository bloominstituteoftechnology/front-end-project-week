import React from "react";
import axios from "axios";
import NoteView from "./noteView";
import {Link} from "react-router-dom";
import {fetchSingle} from "../actions/index";
import {connect} from "react-redux";
import{withRouter} from "react-router-dom";

// class SingleView extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             singleNote:[],
//             id: this.props.match.params.id
//         }
//     }
//     componentDidMount(){
//         this.handleSingle(this.state.id)
//     }
//     handleSingle =(id)=>{
//       this.props.fetchSingle(id)
//       this.setState({singleNote: this.props.singleNote})
//     }
//     render(){
//       console.log(this.props.match.params.id);
//       console.log(this.state.id)
//         // if(this.state.singleNote.length===0){
//         //     return (
//         //         <div>Hold one, we're getting your note</div>
//         //     )
//         // }
//         return (
//             <div><NoteView note={this.state.singleNote}/>
//             <button>Edit</button>
//             <button onClick={this.props.handleDelete(this.state.singleNote._id)}>Delete</button></div>

//         )
//     }
// }
// const mapStateToProps=state =>{
//   return{
//     singleNote:state.singleNote
//   }
// }

// export default withRouter(
//   connect(
//     mapStateToProps,{fetchSingle})(SingleView)
//   )
class SingleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleNote: [],
      isEditing:false
    };
  }
  componentDidMount() {
    this.fetchSingle(this.props.match.params.id);
    console.log(this.props.match.params.id);
  }
  fetchSingle = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        console.log("Single works", response.data);
        this.setState(() => ({ singleNote: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    console.log("Single View Here");
    return (
      <div>
        <NoteView note={this.state.singleNote} />
        <Link to= {`/form/edit/${this.props.match.params.id}`}><button>Edit</button></Link>
        <button
          onClick={() => {
            this.props.handleDelete(this.state.singleNote._id);
            this.props.getNote();
            this.props.history.push("/");
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}
export default SingleView;
