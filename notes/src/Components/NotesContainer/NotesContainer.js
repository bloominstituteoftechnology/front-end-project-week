import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlexDiv, MiniBox, FlexNotes, } from '../StyledComponents/StyledComponents';
import { getNotes } from '../../Actions/';
import MiniNote  from '../MiniNote/MiniNote';
import { Scrollbars } from 'react-custom-scrollbars';
import {withRouter} from 'react-router-dom';

class NotesContainer extends Component {

    componentDidMount() {
    }
    
    render() {
       
        return (
           
            <FlexDiv>
                
            <Scrollbars>
            <FlexNotes>
                {console.log(this.props.notes)}
               
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
        saved: state.saved,
        saveInProgress: state.saveInProgress,

    }
}

export default withRouter(connect(mapStateToProps, { getNotes })(NotesContainer));