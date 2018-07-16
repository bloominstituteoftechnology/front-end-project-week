import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlexDiv, MiniBox } from '../StyledComponents/StyledComponents';
import { getNotes } from '../../Actions/';
import MiniNote  from '../MiniNote/MiniNote';

class NotesContainer extends Component {
    componentDidMount() {
        this.props.getNotes();
    }
    render() {
        return (
            <FlexDiv>
            {this.props.notes.map(note => {
               return <MiniNote note = {note}/>
            })}
            </FlexDiv>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,

    }
}

export default connect(mapStateToProps, { getNotes })(NotesContainer);