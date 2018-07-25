import React, {Component} from 'react';


class Note extends Component{
constructor(props) {
super(props)
}

    render(){
    return (
        <div className='note'>
            <p>  -{this.props.notes.title} </p>
            
            <p>  --{this.props.notes.content} </p>

            <button onClick={
                ()=>{
                this.props.deleteNote(this.props.notes.id)}}> Delete Note </button>
            </div>

    )
}
}
export default Note;
