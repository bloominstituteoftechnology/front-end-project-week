import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import Note from '../Components/ListView/Note';
import { fetchNotes } from '../Actions';

const Loading = styled.h1`
    font-size:4rem;
`


class NoteContainer extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.fetchNotes();
    }
    render(){
        
        if(this.props.isFetching){
            return <Loading>Loading...</Loading>
        } else 
        {
            return (
                <div>
                    {
                        this.props.noteList.map(el =>{
                            return <Note key={el._id} data={el}></Note>
                        })
                    }
                </div>
            )
        }        
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        noteList: state.notes,
    };
  };

  export default connect(mapStateToProps,{ fetchNotes })(NoteContainer);
  
