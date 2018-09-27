import React, { Component } from 'react';

class NoteView extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {title: this.props.note.title, textBody:this.props.note.textBody}
    }
    

    fontSize = () => { 

    if(this.props.note.textBody.length <= 20) {
        return '4.8rem';
    } else if(this.props.note.textBody.length <= 40) {
        return '3.6rem';
    } else if(this.props.note.textBody.length <= 60) {
        return '2.4rem';
    } else if (this.props.note.textBody.length <= 80) {
        return '1.8rem';
    } else if (this.props.note.textBody.length > 100) {
        return '1.4rem'
    }}

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    hideModal = (e, note) => {
        if (e.target.dataset.modal === 'modal') {
        this.props.reviseNote(this.props.note._id, this.state);
        this.props.history.push('/notes');
        }
    }

    render(){

    return (
        <section className="view-note" data-modal="modal" onClick={this.hideModal} >
        <div className="note">
            <div className="note-container">
                <input 
                className="title" 
                name="title" 
                disabled={this.props.match.params.id ? false : true}  
                value={this.state.title} 
                onChange={this.handleChange}
                />

                <textarea
                className = "text-body" 
                name="textBody" 
                disabled={this.props.match.params.id ? false : true} 
                onChange={this.handleChange} 
                defaultValue={this.state.textBody}
                ></textarea> 
                {this.props.match.params.id ? 
                    <div className="note-buttons">
                        <div className="button delete" onClick={() => {this.props.expungeNote(this.props.note._id); this.props.history.push('/notes')}}>Delete Me</div> 
                    </div> 
                : ""}
                
            </div>
            </div>
        </section>
    )
}
}

export class ViewNote extends Component {

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    



    render() {
        // I need to figure out a way to get currentNote out of Render. Maybe if it were stored in state?
    let currentNote = this.props.notes.filter(note => (note._id.toString() === this.props.match.params.id.toString()));
    if (currentNote.length <= 0) {
        currentNote=[{title: "No note found!", id: "none", textBody:"We were unable to find a note matching this request!"}]
    }



    return (
            
                <NoteView
                {...this.props} 
                note={currentNote[0]} 
                reviseNote={this.props.reviseNote} 
                expungeNote={this.props.expungeNote} 
                handleChange={this.handleChange} 
                />
        
    )
}
}