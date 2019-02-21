import React, {Component} from 'react'
import {NotesContext} from '../contexts/NotesProvider'
import axios from 'axios'

class Edit extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            content: '',
            newNote: ''
          }
    }

    componentDidMount(){
        //Set initial state - use id of note clicked
        //Add initial values to input box and textArea
        const {id} = this.props.match.params
        axios.get(`https://lambdanotesapp.herokuapp.com/api/notes/${id}`)
            .then((response) =>{
                this.setState({
                    title: response.data.title,
                    content: response.data.content
                })
                const textArea = document.querySelector('textarea')
                textArea.value= this.state.content
            })
            
    }

    changeHandler = (e) =>{
        //callback necessary to assure title and textBody are accurately obtained 
        this.setState({
          [e.target.name]: e.target.value,
        }, () =>{
          this.setState({
            newNote: {title: this.state.title, content: this.state.content}
          })
        })
    }

    render(){

        const {id} = this.props.match.params
        return (
            
            <div className="editContainer">
              <h3 className="editHeader">Edit Note:</h3>
              <input type="text" 
                name="title"
                placeholder="Note Title" 
                value={this.state.title}
                onChange={this.changeHandler}/>
              <textarea type="text" spellCheck="false"
                rows='15'
                name="content"
                placeholder="Note Content" 
                onChange={this.changeHandler}/>
              <NotesContext.Consumer>
                {data=>{
                  return <button 
                    className="editBtn"
                    onClick={() =>{data.actions.editNote(id, this.state.newNote)}}>Update</button>
                }}
              </NotesContext.Consumer>
            </div>
          )
    }
}

export default Edit

