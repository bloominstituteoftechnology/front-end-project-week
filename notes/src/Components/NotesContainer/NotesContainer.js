import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlexDiv, MiniBox } from '../StyledComponents/StyledComponents';
import { getNotes } from '../../Actions/';

class NotesContainer extends Component {
    componentDidMount() {
        this.props.getNotes();
    }
    render() {
        return (
            <FlexDiv>
            {this.props.notes.map(note => {
               return <MiniBox>
                    <h1>{note.title}</h1>
                    <p>{note.content}</p>
                </MiniBox>
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