import React from "react"
import axios from "axios"
import {Link} from "react-router-dom";
import {DeleteContainer, DeleteBox, Button} from "../Styles/Styles";


class DeleteConfirmation extends React.Component {
   constructor(){
      super()
      this.state = {
         open: true,
      }
   }

   deleteItem = id => {
      axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
         .then(response => {this.setState({open: false})})
         .catch(err => console.log(err))
      this.closeBox()
   }

   closeBox = () => {
      this.setState({open: false})
   }

   render() {
      return(
         this.state.open === true ?
         <DeleteContainer>
            <DeleteBox>
               <p>Are you sure you want to delete this?</p>
               <Link to={`/`} >
                  <Button 
                     bgColor="crimson" 
                     margin="10px"
                     onClick={() => this.deleteItem(this.props.match.params.id)}>Delete</Button>
               </Link>
               <Link to={`/note/${this.props.match.params.id}`} >
                  <Button 
                  margin="10px" 
                  onClick={() => this.closeBox()}>No</Button>
               </Link>
            </DeleteBox>
         </DeleteContainer>
         : null
      )
   }
}

export default DeleteConfirmation