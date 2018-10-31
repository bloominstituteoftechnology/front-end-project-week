import React from "react";
import axios from 'axios';
import NoteView from './noteView'

// class SingleView extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             singleNote: this.props.singleNote
//         }
//     }
//     componentDidMount(){
//         this.props.handleFetchSingle(this.props.match.params.id)
//     }
//     render(){
//         if(this.state.singleNote.length===0){
//             return (
//                 <div>Hold one, we're getting your note</div>
//             )
//         }
//         return (
//             <div><NoteView note={this.state.singleNote}/>
//             <button>Edit</button>
//             <button onClick={this.props.handleDelete(this.state.singleNote._id)}>Delete</button></div>
            
//         )
//     }
// }
// export default SingleView
class SingleView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            singleNote: []
        }
    }
    componentDidMount(){
        this.fetchSingle(this.props.match.params.id)
        console.log(this.props.match.params.id)
    }
    fetchSingle=(id)=>{
        axios
        .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then(response => {
            console.log('Single works',response.data)
          this.setState(() => ({ singleNote: response.data }));
        })
        .catch(error => {
          console.error(error);
        });
    }
    render(){
        console.log('Single View Here')
        return(
            <div>
                <NoteView note={this.state.singleNote}/>
                <button>Edit</button>
                <button onClick={this.props.handleDelete(this.state.singleNote._id)}>Delete</button>
            </div>
        )
    }
}
export default SingleView