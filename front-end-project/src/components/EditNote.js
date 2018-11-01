import React from "react";

import axios from "axios";


// const EditView = ({changeHandler, title, textBody, notes, editNote, history}) => {

class EditView extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            textBody: "",
            id: ""
        }
    }

    toEdit = () => {
        this.props.editNote()
       
    }        

    componentDidMount() {
        this.setState({ title: this.props.note.title, textBody: this.props.note.textBody, id: this.props.note._id})
    }

    
  editNote = (e) => {
      e.preventDefault();
    console.log("this state id editnote", this.state.id)

    axios.put(`https://fe-notes.herokuapp.com/note/edit/${this.state.id}`,
         {title: this.state.title, textBody: this.state.textBody})
          .then(res => {
            console.log("edit", res.data)
            this.setState({  id: "", title:"", textBody:"" })
            this.props.getNote();
            this.props.history.push("/note-list/")
            
          })
          
  }

    changeHandle = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    
    render() {

        return (
            <div>
            <div className="input-container">
            <form onSubmit={this.editNote}>
              <div className="new-note-input">
                <h3>Edit Note: </h3>
                <input className="input-field" type="text" onChange={this.changeHandle} value={this.state.title} name="title" placeholder="Note Title"></input>
               </div>
                <div className="text-area">
                    <textarea 
                        className="text-field"
                        type="text" 
                        onChange={this.changeHandle}
                        value={this.state.textBody}
                        name="textBody"
                        placeholder="Note Content"
                        cols="45"
                        rows="10" />
                </div>
                <button className="save-btn">Update</button>
            </form>
            </div>
            </div>
        )

    }
   
}



export default EditView