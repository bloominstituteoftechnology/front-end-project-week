import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import NoteCard from './NoteCard';

const NotesListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 4%;

    h2{
        font-size: 2.2rem;
        margin: 55px 0 25px 0;
    }
`;

const NotesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
`;

class NotesList extends Component{
    componentDidUpdate(){
        if(this.refs.container){
            this.props.updateHeight(this.refs.container.clientHeight);
        }
    }

    render(){
        if(this.props.fetching){
            return <div>Loading data...</div>
        }
    
        return(
            <NotesListContainer ref="container">
                <h2>Your Notes:</h2>
                <NotesContainer>
                    {this.props.notes.map(note=><NoteCard key={note.id} {...this.props} note={note}/>)}
                </NotesContainer>
            </NotesListContainer>
        )
    }
}

const mapStateToProps = state=>{
    return{
        fetching: state.fetching,
        notes: state.notes
    }
}

export default withRouter(connect(mapStateToProps)(NotesList));