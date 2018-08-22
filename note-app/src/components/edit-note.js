import React, {Component} from 'react'
import {Link} from 'react-router-dom' 
import SideBar from './side-bar';

class EditNote extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : '',
            content : '',
            tags : '', 
        }
    }
    componentDidMount () {
        const title = this.props.location.state.select.title;
        const content = this.props.location.state.select.textBody;
        const tags = this.props.location.state.select.tags;
        console.log(tags)
        this.setState({title,content,tags})
    }
    onChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    gatherInformation = () => {
        console.log(this.state.tags)
        let tags = [] 
        console.log(tags)
        if(typeof this.state.tags !== 'object'){
             tags = this.state.tags.split(/[ ,]+/).length ? this.state.tags.split(/[ ,]+/) : []
        } else {
            tags = this.state.tags
        }
        
        const obj = {...this.props.location.state.select, tags: tags, title:  this.state.title, textBody: this.state.content, __v: this.props.location.state.select.__v + 1}
        console.log(tags)
        console.log(obj)
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
                <textarea onChange = {this.onChange} className ="input-title input-tags" name="tags" value = {this.state.tags} placeholder ="seperate tags by comma or space"></textarea>
                <br/>
                <Link to = '/'><button onClick = {this.gatherInformation} className = "btn-side-bar">Update</button></Link>
              </div>
            </div>

        )
    }
}

export default EditNote; 