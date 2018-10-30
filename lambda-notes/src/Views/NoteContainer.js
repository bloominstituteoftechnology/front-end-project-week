import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Note from '../Components/ListView/Note';
import { fetchNotes, fetchNotesById } from '../Actions';


const Loading = styled.h1`
    font-size:4rem;
`

const WrapperDiv = styled.div`
    border:1px solid red;
    display:flex;
    flex-wrap:wrap;
`


class NoteContainer extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchNotes();
    }

    handleClick = (event,id) =>{
        this.props.fetchNotesById(id);
    }
    render(){
        
        if((this.props.isFetching)||(this.props.isAdding)){
            return <Loading>Loading...</Loading>
        } else 
        {
            return (
                <WrapperDiv>
                    {
                        this.props.noteList.map(el =>{
                            return <Link key={el._id} to={`/Note/${el._id}`}><Note data={el} handleClick={this.handleClick} ></Note></Link>
                        })
                    }
                </WrapperDiv>
            )
        }        
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        isAdding: state.isAdding,
        noteList: state.notes,
    };
  };

  export default connect(mapStateToProps,{ fetchNotes, fetchNotesById })(NoteContainer);
  
