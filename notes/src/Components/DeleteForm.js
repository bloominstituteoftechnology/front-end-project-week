import React from "react";

class DeleteForm extends React.Component{
         constructor(props){
            super(props);
            this.state={

                noteId:this.props.match.params.noteId
            }
         }
    deleteHandler=()=>{
        this.props.deleteNote(this.state.noteId)
    }

  render(){
        return(
          <div>
              <h2>Are you sure you want to Delete?</h2>
              <div className="btn">
                  <button onClick={this.deleteHandler}>Delete</button>
                  <button> No </button>
              </div>

          </div>


        )



  }

}

export default DeleteForm