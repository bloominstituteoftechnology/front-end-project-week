import React from 'react';

import Note from './note'
import { connect } from 'react-redux';
import  { MappedNotes }  from './styled-components';
import { fetchNotes } from './actions';


class NotesList extends React.Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){
       this.props.fetchNotes();
    }

    render(){
        console.log(this.props)
        return (
            <MappedNotes>
              {this.props.notes.map(item => 
                <Note key={item._id} note={item} />
              ).reverse()}
            </MappedNotes>
        )
    }

}
const mapStateToProps =(state)=>{
    return {notes: state.notes}
}
export default connect(mapStateToProps, { fetchNotes })(NotesList);