import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { notes } from '../notes';

class EditNote extends Component{
    constructor(props){
        super();
        this.state = {
            id: props.edit.id,
            title: props.edit.title,
            text: props.edit.text
            
        }
        // console.log('edit-tite', this.state.props.edit.title);
        console.log(props);
    }

    // componentDidMount(props){
    //     props = this.state.props.edit
    //     this.setState({
    //         title: props.title,
    //         text: props.text
    //     })
    //     console.log('did mount', props);
    // }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        // event.preventDefault();
        notes.splice(notes, 1, this.state)
        this.setState({
            id: this.state.id,
            title: event.target.value,
            text: event.target.value
        })
        console.log(notes)
    }

    handleDelete = () => {
        notes.splice(notes, 1)
        console.log('del')
    }

    // handletitleSubmit = (event) => {
    //     event.preventDefault();
       
    //     // return(
    //     // this.state.props.edit.title === this.state.editTitle,
    //     // this.state.props.edit.text === this.state.editText
    //     // )
    //     this.setState({
            
    //     })
    // }

    // handleTextSubmit(value){
    //     const edtext = this.state.editText;
    //     this.state.props.text === edtext;
        
    // }



    // handleTitleInputChange = (event) => {
    //     this.setState({ editTitle: event.target.value });
    // }

    // handleTextInputChange = (event) => {
    //     this.setState({ editText: event.target.value });
    // }


    render(){
        return(
        <div className='page-container'>
        <div className='page-title'>Edit Note:</div>
        <form>
        <input name='title' type='text' onChange={(event) => this.handleChange(event)} placeholder='-Edit Title Here-' value={this.state.title} />
        <input name='text' type='text' onChange={(event) => this.handleChange(event)} placeholder='-Edit Text Here-' value={this.state.text} />
        <Link to={`/note/${this.state.id}`}><button onClick={(event) => {this.handleSubmit(event)}}>Submit</button></Link>
        <Link to='/'><button onClick={this.handleDelete}>Delete</button></Link>
        <Link to='/'><button>Cancel</button></Link>
        </form>
        </div>
        )
    }
}

export default EditNote;