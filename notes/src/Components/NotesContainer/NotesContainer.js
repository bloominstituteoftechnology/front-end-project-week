import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlexDiv, MiniBox, FlexNotes } from '../StyledComponents/StyledComponents';
import { getNotes } from '../../Actions/';
import MiniNote  from '../MiniNote/MiniNote';
import { Scrollbars } from 'react-custom-scrollbars';

class NotesContainer extends Component {
    componentDidMount() {
        this.props.getNotes();
    }
    render() {
        return (
            
            <FlexDiv>
            <Scrollbars>
            <FlexNotes>
            {this.props.notes.map(note => {
               return <MiniNote note = {note}/>
            })}
           </FlexNotes>
         </Scrollbars>
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