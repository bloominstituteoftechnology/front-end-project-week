import React, {Component} from 'react';
import Notes from './Notes'
import {Link} from 'react-router-dom';



export default class NotesList extends Component {

    state = {
        title:'',
        content:'',
        id:'',
        notes: [],
    };



componentDidMount() {
    this.setState({notes: Notes})
    console.log(this.props)
}

addNote = (note) => {

}

   render(){
       return(

        <div className ='container0'>
        <div className ='leftnav'>
        <h1 className='header'> Lambda Notes </h1>

    
        <Link to='/'><div className='button'> View Your Notes </div></Link>
       


        <Link to='/NewNote'><div className='button'> +Create New Note </div></Link>
        </div>
        
    <div className ='container1'>
      {this.state.notes.map(note =>{
          
          return(
              <div className = 'Note'>
            <div>{note.title}</div>
            <div>{note.content}</div>
            </div>
        )})}
        
    </div>
        </div>

       )
   }
}

