import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNote, updateNote } from '../../actions';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            id: ''
        }
    }

    componentDidMount () {
        // change this line to grab the id passed on the URL
        if(!this.props.match) return;
        const id = this.props.match.params.id;
        const { data } = this.props;
        if(!data.fetched) {
            return <Redirect to="/"/>
        }

        data.notes.forEach(note => {       
            if( note._id === id)
            this.setState({title: note.title, content: note.content, id: id})
        }
        )
    }

    onChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        const note = {title: this.state.title, content: this.state.content};
        if(this.state.id)
        {
            this.props.updateNote(this.state.id, note);
        } else {
            this.props.addNote(note);
        }      
    }

    
    render() {
        // Redirect to / if note is deleted true
        // if(this.state.isUpdated) {
        //     return <Redirect to="/notes"/>
        // }
        console.log("updated ", this.props.data.updated);
        if(this.props.data.updated) {
          return <Redirect to="/notes"/>
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
                {this.state.title && this.state.content && <button className="save-button" onClick={this.onSubmitHandler}>
                    {this.props.button}
                </button>}
            </div>
        )
    }
}
 

const mapStateToProps = state => {
    const props = state;
    return props;
} 

export default connect(mapStateToProps, { addNote, updateNote })(NoteForm);