import React from "react";
import { Link } from "react-router-dom";

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
    

    render() {
        return (
        <div>
            <input className="addNoteForm" type="text" placeholder="Title" value={this.state.newtitle} name="newtitle" onChange={this.handleInputChange} />

            <textarea className="addNoteForm" type="text" name="newtext" cols="25" rows="10" placeholder="Your Note" value={this.state.newtext} onChange={this.handleInputChange} />

            <Link className="savenote" to="/"> 
            <button onClick= {event => {
                
                this.props.onSubmit(this.state);
                this.setState(prevState => ({
                    id: Date.now(),
                    newtitle: this.state.newtitle,
                    newtext: this.state.newtext,
                }));
            }}>Save</button></Link>
    </div>
        )
    }
}

export default AddNote;