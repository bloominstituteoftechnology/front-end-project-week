import React,{ Component } from "react";

class AddNote extends Component {
    constructor(props){
        super(props)
        this.state= {
            title: '',
            body: '',
            id: ''
        }
    }

    componentDidMount() {
        this.setState({id: Date.now()});
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    render() {
        const { title, body, id } = this.state;
        return (
            <div className="note-flex-props">
                <div className="note-view">
                    <div className="note-form">
                    <h3>Create New Note:</h3>
                        <form>
                            <input name="title" value={title} placeholder="Note Title" onChange={(e) =>     this.handleChange(e)}/>
                            <textarea name="body" value={body} placeholder="Note Content" onChange={(e) =>     this.handleChange(e)}/>
                            <button className="button" onClick={(e) => this.props.addNote(e, {id, title, body})}>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddNote;