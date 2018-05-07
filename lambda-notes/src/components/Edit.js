import React from 'react';
import '../style/edit.css';
import {connect} from 'react-redux';
import {editNote} from '../actions/editAction';

 class Edit extends React.Component{
     constructor(props){
         super(props)
         this.state = {
                note: {
                    title:'',
                    content:''
                }
         }
     }

     componentDidMount(){
        const id = this.props.match.params.id;
        const targetNote = this.props.notes.filter(note => note.id == id)
        
         this.setState({note:{title:targetNote[0].title,content:targetNote[0].content}})
     }
    
     
     editForm = e => {
         e.preventDefault()
         let id = this.props.match.params.id;
        
         this.props.editNote({...this.state.note,id})
         this.props.history.push("/")

     }

     titleEdit = e => {
        this.setState({note:{...this.state.note,title:e.target.value}})
     }
     contentEdit = e => {
         this.setState({note:{...this.state.note,content:e.target.value}});

     }

     render(){
         return (
             <div className = "edit-form">
             <h2> Edit Note </h2>
             <form onSubmit = {this.editForm}>
                <input value ={this.state.note.title} onChange = {this.titleEdit}/>
                <textarea value = {this.state.note.content} onChange = {this.contentEdit} cols = "75" rows = "25"/>
                <button> Edit </button>
             </form>
            
            </div>
         )
     }
 }
const mapStateToProps = state => {
    return{
        notes:state.notes
    }
}


export default connect(mapStateToProps,{editNote})(Edit);