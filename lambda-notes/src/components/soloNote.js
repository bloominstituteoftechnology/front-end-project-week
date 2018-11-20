import React from 'react';
import { connect } from 'react-redux';
import { deleteNote }from './actions';




class SoloNote extends React.Component{
    constructor(props){
        super(props);
    }

deleteHandler=(id)=>{
    this.props.deleteNote(id);
    this.props.history.push('/')

}


    
    render(){
       const note = this.props.notes.find(item =>{
                   return item._id === this.props.match.params.id
                });
        return(
            <div>
                <div className='solo-header'>
                    <p>edit</p>
                    <p onClick={()=>this.deleteHandler(note._id)} >delete</p>
                </div>
                <div className='note-body'>
                    <h1> {note.title}</h1>
                    <h3>{note.textBody}</h3>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
        return {
            notes: state.notes
        }
}
export default connect(mapStateToProps, { deleteNote })(SoloNote); 