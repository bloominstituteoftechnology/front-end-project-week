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
    constructor(props){
        super(props);
        this.state = {
            id: '',
        }
    }

    componentDidMount(){
        this.props.getNote(this.props.match.params.id)
        this.setState({id: this.props.match.params.id})
    }

    render(){
        return(
            <StyledNote>
                    {this.props.currentNote ? (
                        <StyledButtons>
                            <StyledLink to={`/edit/${this.state.id}`}>edit</StyledLink>
                            <StyledLink to={`/notes/${this.state.id}/delete`}>delete</StyledLink>
                        </StyledButtons>
                    ) : null}
                
                    {this.props.fetchingnote ? (
                        <div>Getting Note</div>
                    ) : null}
                    {this.props.fetchednote ? (
                        <div>
                            <h4>{this.props.currentNote.title}</h4>
                            <p>{this.props.currentNote.textBody}</p>
                        </div>
                    ) : null}
                    {this.props.error ? (
                        <h4>{this.props.error}</h4>
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
        error: state.error,
    }
    

}

export default connect(mapStateToProps, { getNote })(Note);