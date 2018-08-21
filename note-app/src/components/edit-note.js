import React, {Component} from 'react'
import {Link} from 'react-router-dom' 

class EditNote extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : '',
            content : '',
            index : null
        }
    }
    componentDidMount () {
        const title = this.props.location.state.title;
        const content = this.props.location.state.content;
        const index = this.props.location.state.index; 
        this.setState({title,content, index})
    }
    onChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    gatherInformation = () => {
        const obj = {title:  this.state.title, content: this.state.content}
        this.props.update(this.state.index, obj)
    } 

    render() {
        return (

            <div className ="create-note-form">
                <h3> Edit Note:</h3>
                <textarea onChange = {this.onChange} className = "input-title" type="text" placeholder = "Note Title" name = 'title' value = {this.state.title}></textarea> 
                <br/>
                <textarea onChange = {this.onChange} className = "input-content" type="text" placeholder = "Note Content" name = 'content' value ={this.state.content}></textarea>
                <br/>
                <Link to = '/'><button onClick = {this.gatherInformation} className = "btn-side-bar">Update</button></Link>
                {/* Would like to fix the placeholder inside of the input-content also to the right margin is off by 11px */}
            </div>

        )
    }
}

export default EditNote; 