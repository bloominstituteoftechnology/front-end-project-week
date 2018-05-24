import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'


class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            isUpdated: false
        }
    }

    componentDidMount () {
        // change this line to grab the id passed on the URL
        if(!this.props.match) return;
        const id = this.props.match.params.id;
        this.props.notes.forEach((note) => {
            if(note.id+'' === id)
                this.setState({title: note.title, content: note.content})
        } )
        
    }

    onChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmitHandler = () => {
        this.setState({isUpdated: !this.isUpdated});
    }

    render() {
        // Redirect to / if note is deleted true
        if(this.state.isUpdated) {
            return <Redirect to="/"/>
        }

        return (
            <div className={this.props.className}>
                <h2>{this.props.header}</h2>
                <form className="note-form" >
                    <div>
                        <input className="input-tittle"
                            name="title"
                            value={this.state.title}
                            placeholder="Note Title"
                            onChange={this.onChangeHandler}
                        />
                     </div>
                     <div>
                     <textarea className="input-content"
                            name="content"
                            value={this.state.content}
                            placeholder="Note Content"
                            onChange={this.onChangeHandler}
                        />
                     </div>
                </form>
                <button className="save-button" onClick={this.onSubmitHandler}>
                    {this.props.button}
                </button>
            </div>
        )
    }
}
 
export default NoteForm;