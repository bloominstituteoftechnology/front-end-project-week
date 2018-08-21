import React, {Component} from 'react'


class CreateNote extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            content: ''
        }
    }

    onChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    gatherCreation = () => {
        const obj = {title: this.state.title, content: this.state.content}
        this.setState({title: '', content: ''})
        this.props.create(obj);
    }

    render() {

        return (

            <div className ="create-note-form">
                <h3>Create New Note:</h3>
                <textarea onChange = {this.onChange} className = "input-title" type="text" placeholder = "Note Title" name ="title" value = {this.state.title}></textarea>
                <br/>
                <textarea onChange = {this.onChange} className = "input-content" type="text" placeholder = "Note Content" name ="content" value = {this.state.content}></textarea>
                <br/>
                <button onClick = {this.gatherCreation} className = "btn-side-bar">Save</button>
                {/* Would like to fix the placeholder inside of the input-content also to the right margin is off by 11px */}
            </div>

        )
    }
}

export default CreateNote 