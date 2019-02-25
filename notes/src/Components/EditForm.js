import React from "react";

class EditForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            noteId:this.props.match.params.noteId,
            title : "",
            textBody : "",
            notes : this.props.notes
        }
    }
    editHandler=(event)=>{
        let note= {
            _id: this.state.noteId,
            title : this.state.title,
            textBody : this.state.textBody
        }
        console.log("Updating note : ", note)
        this.props.editNote(note)
    }
    changeHandler= (event) => {
        event.preventDefault()
        this.setState({[event.target.name]:event.target.value})
    }

    componentDidMount() {
        console.log("Notes", this.state.notes)
        if (this.state.notes != null) {
            let newNote = this.state.notes.find(note => {
                return note._id == this.state.noteId;
            });
            if (newNote != null) {
                this.setState({title : newNote.title, textBody:newNote.textBody})
            }
        }

    }

    render(){
        return(
            <div>
                <h2>Edit Note:</h2>
                <div className="edit-btn">
                    <input type="text" name="title"  placeholder={this.state.title}
                            className="noteTitle" onChange={this.changeHandler}/>
                    <textarea type="text"  cols="40"  rows="40" name="textBody" placeholder={this.state.textBody}
                              onChange={this.changeHandler} className="noteText"/>

                    <button className="UpdateButton" onClick={this.editHandler}>Update</button>


                </div>

            </div>


        )



    }

}

export default EditForm