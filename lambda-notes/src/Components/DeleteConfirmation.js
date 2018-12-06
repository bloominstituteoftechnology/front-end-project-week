import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {DeleteContainer, DeleteBox, Button} from "../Styles/Styles";

class DeleteConfirmation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            open: true,
        }
    }
    deleteItem = id => {
      axios
        .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
        .then(res => {
          console.log("note was successfully deleted");
          this.setState({ note: res.data });
        })
        .catch(err => console.log(err, "note could not be deleted"));
    };
    render() {
        return(
           this.state.open === true ?
           <DeleteContainer>
              <DeleteBox>
                 <p>Are you sure you want to delete this note?</p>
                 <Link to={`/`} >
                    <Button 
                       bgColor="crimson" 
                       margin="10px"
                       onClick={() => this.deleteItem(this.props.match.params.id)}>Delete</Button>
                 </Link>
                 <Link to={`/`} >
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