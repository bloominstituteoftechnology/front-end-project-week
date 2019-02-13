import React  from 'react';
import "./note.css"


class Note extends React.Component{

     constructor(props){
      super(props);
      this.state={



      }
     }





     deleteHandler=()=>{

         this.props.deleteNote(this.props.note._id)


     }

     render(){

         return (
            <div className="note">

                <h2>{this.props.note.title} </h2>
                <p> {this.props.note.textBody} </p>
               <div>
                  <p>Are you sure you want to delete this? </p>
               <button onClick={this.deleteHandler}>Delete</button>
                   <button >No</button>
              </div>

            </div>



         )

     }


}
export default Note