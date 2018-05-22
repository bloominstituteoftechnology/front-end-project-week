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
            <div>
                <form>
                    <input name="title" value={title} placeholder="Note Title" onChange={(e) => this.handleChange(e)}/>
                    <input name="body" value={body} placeholder="Note Content" onChange={(e) => this.handleChange(e)}/>
                    <button onClick={(e) => this.props.addNote(e, {id, title, body})}>Save</button>
                </form>
            </div>
        );
    }
}

export default AddNote;