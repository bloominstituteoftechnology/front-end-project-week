import React from 'react';
import axios from 'axios';


export default class NoteView extends React.Component {
    constructor(props){
        super(props);
   
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

toggleDelete = () => {
    this.setState({deleteNote: !this.state.deleteNote})
}



deleteNote = () => {
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${this.state.note._id}`)
         .then(res => console.log(res))
         .then(res => this.props.update())
         .catch(err => console.log(err));

    this.props.history.push('/')
}



submitNote = () => {
    
    this.props.submitNote(this.state.note._id, this.state.note);
    this.setState({editNote: !this.state.editNote})
    
}
componentWillMount(){
    
}

componentDidMount(){
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
    .then(res => {
     console.log('works',res);
     let note = res.data.filter(note => note._id === this.props.match.params.id );
     this.setState({note: note[0]})  
     })
    .catch(err => console.log(err));
}
    render(){

        
        return (
            
            <div className="cont-body">
            
            { ( this.state.deleteNote && <div className="modal">
                <div className="modal-card">
                <p><strong>Are you sure you want to delete this?</strong></p>
                <div className="btns">
                    <div className="button red" onClick={this.deleteNote}>DELETE</div>
                    <div className="button" onClick={this.toggleDelete}>NO</div>
                </div>
                </div>
            </div> ) }

                {!this.state.note ? <h1>Loading Note</h1> :  
                <React.Fragment>
                <div className="top-cont">

                    {!this.state.editNote ? <h1>{this.state.note.title}</h1> :
                    <input type='text' name="title" id='title-input' onChange={this.inputChange} value={this.state.note.title}/>
                }
                    <div className="options">
                        <div className='editors' onClick={this.editNote}>EDIT</div>
                        <div className='editors' onClick={this.toggleDelete}>DELETE</div>
                    </div>
                </div>

                <div className="bottom-cont">
                
                {!this.state.editNote ? <p>{this.state.note.textBody}</p> :
                <div className='txt-cont'>
                <textarea id='textarea' name='textBody' onChange={this.inputChange}>{this.state.note.textBody}</textarea>
                <div className='button' onClick={this.submitNote}>SAVE</div>
                </div> }
                </div>
                </React.Fragment>
            }
            </div>
        )
    }
}