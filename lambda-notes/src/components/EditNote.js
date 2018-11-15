import React, {Component} from 'react';

class EditNote extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: props.note._id,
            name: props.note.title,
            text: props.note.textBody
        }
    }

    handleInput = event=>{
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = event=>{
        event.preventDefault();
        
        this.props.editNote(this.state.id, {
            title: this.state.name,
            textBody: this.state.text
        })
        
        this.props.history.push(`/note/${this.props.note._id}`);
    }

    render(){
        if(!this.props.note){
            return <div>Loading data...</div>
        }
        return(
            <div>
                <h2>Edit Note:</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={this.state.name} placeholder="Note Title" onChange={this.handleInput}/>
                    <input type="text" name="text" value={this.state.text} placeholder="Note Content" onChange={this.handleInput}/>
                    <button type="submit">Update</button>
                </form>
            </div>
        )
    }
}

export default EditNote;