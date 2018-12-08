import React, { Component } from 'react';


class EditNote extends Component {
    constructor(props){
        super(props);
        this.state= {
            id: props.note._id,
            title: props.note.title,
            textBody: props.note.textBody
        }
    }

    handleInput  = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let id = this.props.match.params.id
        console.log(this.props)
        this.props.updateNote(id, {
            title:this.state.title,
            textBody: this.state.textBody
            })
            this.props.history.push(`/`)
    }

    

    

    render(){
        if(!this.props.note){
            return <div>Loading data...</div>
}
        return(
        <div className='textarea'>
            <form onSubmit={this.handleSubmit}>
                <input name='title' type='text' value={this.state.title} onChange={this.handleInput}>
                </input>
                <textarea name='textBody' type='text' value={this.state.textBody} onChange={this.handleInput}>

                </textarea>
                <button type='submit'>Save</button>

            </form>
            
        </div>
        )
    }
}

export default EditNote;