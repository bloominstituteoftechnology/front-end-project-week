import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getNote } from '../actions';


const StyledNote = styled.div`
    display: flex;
    flex-flow: column;
    background: #F3F3F3;
    width: 100%;
    padding: 2%;
    align-items: flex-start;
`;

const StyledButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    border-bottom: 1px solid black;
    margin: 1%;
`;

class Note extends Component {

    componentDidMount(){
        this.props.getNote(this.props.match.params.id)
    }

    render(){
        console.log("this.props.currentNote", this.props.currrentNote);
        return(
            <StyledNote>
                <StyledButtons>
                    <StyledLink to={`/edit/${this.props.currentNote.id}`}>edit</StyledLink>
                    <StyledLink to={`/notes/${this.props.currentNote.id}/delete`}>delete</StyledLink>
                </StyledButtons>
                    {this.props.fetchingnote ? (
                        <div>Getting Note</div>
                    ) : null}
                    {this.props.fetchednote ? (
                        <div>
                            <h4>{this.props.currentNote.title}</h4>
                            <p>{this.props.currentNote.textBody}</p>
                        </div>
                    ) : null}
   
            </StyledNote>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
        currentNote: state.currentNote,
        fetchingnote: state.fetchingnote,
        fetchednote: state.fetchednote,
    }
    

}

export default connect(mapStateToProps, { getNote })(Note);