import React from "react";

class AddNote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: noteid++,
            newtitle: "",
            newtext: "",


        }
    }

    handleInputChange = event => {this.setState({ [event.target.name]: event.target.value });};

    handleNoteSubmit = () => {
        let newID = noteid++
        this.setState({id: newID}, function() {
            let notes = this.state.notes.slice();
            let id = this.state.id;
            if(this.state.newtitle != "" || this.state.newtext != ""){
                noteid++
                notes.push({
                    id: id,
                    title: this.state.newtitle,
                    text: this.state.newtext,
                })
                this.setState({notes, newtitle: "", newtext: "", id})}
        })
    }
    

    render() {
        <div>
            <form className="addNoteForm"
            onSubmit={ event => {
                this.props.onSubmit(this.state);
                this.setState(prevState => ({
                        id: noteid++,
                        newtitle: "",
                        newtext: "",
                }));
            }>

            <input type="text" placeholder="Title" value={this.state.newtitle} name="newtitle" onChange={this.handleInputChange} />

            <textarea type="text" className="addNoteForm" cols="25" rows="10" placeholder="Your Note" value={this.state.newtext} onChange={this.handleInputChange} />

            <button>Save</button>
        </form>
    </div>
        }
    }
}

export default AddNote;