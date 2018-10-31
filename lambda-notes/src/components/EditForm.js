import React from "react";

class EditForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            note:null
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.editNote(id);
    }
    render(){

        const editNotes = event => {
            event.preventDefault();
            this.props.editNote(note._id);
            props.history.push(`/note/${note._id}`);
        };
        return (
            <form className="form">
                <h2>Edit Note:</h2>
                <input
                    type="text"
                    name="newTitle"
                    placeholder="Title"
                    onChange={props.handleChange}
                    value={props.newTitle}
                />
                <textarea
                    name="NewTextBody"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Note Content"
                    onChange={props.handleChange}
                    value={props.newTextBody}
                />
                <button onClick={editNotes}>Update</button>
            </form>
        );
    }
};

export default EditForm;