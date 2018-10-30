import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import Note from '../Components/ListView/Note';
import { fetchNotes } from '../Actions';

const Loading = styled.h1`
    font-size:4rem;
`

const WrapperDiv = styled.div`
    border:1px solid red;
    display:flex;
    flex-wrap:wrap;
`


class NoteContainer extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        console.log("calling cdm")
        this.props.fetchNotes();
    }
    render(){
        
        if(this.props.isFetching){
            return <Loading>Loading...</Loading>
        } else 
        {
            return (
                <WrapperDiv>
                    {
                        this.props.noteList.map(el =>{
                            return <Note key={el._id} data={el}></Note>
                        })
                    }
                </WrapperDiv>
            )
        }        
    }
}

const mapStateToProps = state => {
    console.log('what was on state???',state)
    return {
        isFetching: state.isFetching,
        noteList: state.notes,
    };
  };

  export default connect(mapStateToProps,{ fetchNotes })(NoteContainer);
  
