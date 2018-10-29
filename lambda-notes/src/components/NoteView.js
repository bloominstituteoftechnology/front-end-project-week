import React from 'react';
import axios from 'axios';


export default class NoteView extends React.Component {
    constructor(props){
        super(props);
    this.note = this.props.notes.filter(note => note._id === this.props.match.params.id );
    this.note = this.note[0];
    this.state = {
        note: this.note,
        editNote: false,
        deleteNote: false

    }
    
}

editNote = () => {
    console.log(this.state.note)
    this.setState({editNote: !this.state.editNote})
}

inputChange = (e) => {
    console.log(e.target.value)
    this.setState({note: {...this.state.note, [e.target.name]: e.target.value}})
}



deleteNote = () => {
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${this.note.id}`)
         .then(res => console.log(res))
         .catch(err => console.log(err));

    this.props.history.push('/')
}

submitNote = () => {
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${this.note._id}`, this.state.note)
         .then(res => {console.log('put success', res)
                       this.setState({editNote: !this.state.editNote})})
         .catch(err => console.log(err))

    
}
    render(){
        
        return (
            <div className="cont-body">

            { ( this.state.deleteNote && <div className="modal">
                <div className="modal-card">
                <p><strong>Are you sure you want to delete this?</strong></p>
                <div className="btns">
                    <div className="button red">DELETE</div>
                    <div className="button">NO</div>
                </div>
                </div>
            </div> ) }


                <div className="top-cont">

                    {!this.state.editNote ? <h1>{this.note.title}</h1> :
                    <input type='text' name="title" id='title-input' onChange={this.inputChange} value={this.state.note.title}/>
                }
                    <div className="options">
                        <div className='editors' onClick={this.editNote}>EDIT</div>
                        <div className='editors'>DELETE</div>
                    </div>
                </div>

                <div className="bottom-cont">
                
                {!this.state.editNote ? <p>{this.note.textBody}</p> :
                <div className='txt-cont'>
                <textarea id='textarea' name='textBody' onChange={this.inputChange}>{this.note.textBody}</textarea>
                <div className='button' onClick={this.submitNote}>SAVE</div>
                </div> }
                </div>
            
            </div>
        )
    }
}