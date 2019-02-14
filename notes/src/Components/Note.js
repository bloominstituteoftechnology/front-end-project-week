import React  from 'react';
import "./note.css"


class Note extends React.Component{

     constructor(props){
      super(props);
      this.state={
          "tags": this.props.note.tags,
          "title": this.props.note.title,
          "textBody":this.props.note.textBody

      }
     }


     deleteHandler=()=>{

         this.props.deleteNote(this.props.note._id)


     }
     editHandler=()=>{
         let note={
             "tags": this.props.note.tags,
             "title": this.props.note.title,
             "textBody":this.props.note.textBody
         }
         this.props.updateNote(this.props.note._id,note)
         //this.setState ({tags:[],title:"",textBody:""})

     }

     render(){

         return (
            <div className="note">

                <h2>{this.props.note.title} </h2>
                <p> {this.props.note.textBody} </p>
               <div>
                  <p>Are you sure you want to delete this? </p>
                   <div>
                      <button onClick={this.deleteHandler}>Delete</button>
                      <button >No</button>
                   </div>
                   <button onClick={this.editHandler}>Edit</button>
              </div>

            </div>



         )

     }


}
export default Note