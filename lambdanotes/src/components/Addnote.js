import React from "react";

class AddNote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            newtitle: "",
            newtext: "",


        }
    }

    handleInputChange = event => {this.setState({ [event.target.name]: event.target.value });};

    handleNoteSubmit = () => {
        let newID = this.state.notes[(this.state.notes.length-1)].id;
        this.setState({id: newID}, function() {
            let notes = this.state.notes.slice();
            let id = this.state.id;
            if(this.state.newtitle != "" || this.state.newtext != ""){
                id++
                notes.push({
                    id: id,
                    title: this.state.newtitle,
                    text: this.state.newtext,
                })
                this.setState({notes, newtitle: "", newtext: "", id})}
        })
    }
    

    render() {
        return (
        <div>
            <input type="text" placeholder="Title" value={this.state.newtitle} name="newtitle" onChange={this.handleInputChange} />

            <textarea type="text" className="addNoteForm" cols="25" rows="10" placeholder="Your Note" value={this.state.newtext} onChange={this.handleInputChange} />

            <button>Save</button>
    </div>
        )
    }
}

export default AddNote;