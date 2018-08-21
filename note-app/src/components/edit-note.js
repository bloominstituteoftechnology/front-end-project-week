import React, {Component} from 'react'
import {Link} from 'react-router-dom' 
import SideBar from './side-bar';

class EditNote extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : '',
            content : '',
        }
    }
    componentDidMount () {
        const title = this.props.location.state.select.title;
        const content = this.props.location.state.select.textBody;
        this.setState({title,content})
    }
    onChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    gatherInformation = () => {
        const obj = {...this.props.location.state.select.title, title:  this.state.title, textBody: this.state.content, __v: this.props.location.state.select.__v + 1}
        this.props.update(this.props.location.state.select.id, obj)
    } 

    render() {
        return (
            <div className="main-container">
              <SideBar />
              <div className ="create-note-form">
                <h3> Edit Note:</h3>
                <textarea onChange = {this.onChange} className = "input-title" type="text" placeholder = "Note Title" name = 'title' value = {this.state.title}></textarea> 
                <br/>
                <textarea onChange = {this.onChange} className = "input-content" type="text" placeholder = "Note Content" name = 'content' value ={this.state.content}></textarea>
                <br/>
                <Link to = '/'><button onClick = {this.gatherInformation} className = "btn-side-bar">Update</button></Link>
              </div>
            </div>

        )
    }
}

export default EditNote; 