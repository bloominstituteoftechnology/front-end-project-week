import React, {Component} from 'react'


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

    render() {
        return (

            <div className ="create-note-form">
                <h3> Edit Note:</h3>
                <input className = "input-title" type="text" placeholder = "Note Title" name = 'title' value = {this.state.title}/> 
                <br/>
                <input className = "input-content" type="text" placeholder = "Note Content" name = 'content' value ={this.state.content}/>
                <br/>
                <button className = "btn-side-bar">Update</button>
                {/* Would like to fix the placeholder inside of the input-content also to the right margin is off by 11px */}
            </div>

        )
    }
}

export default EditNote; 