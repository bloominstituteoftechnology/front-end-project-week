import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlexDiv, MiniBox, FlexNotes } from '../StyledComponents/StyledComponents';
import { getNotes } from '../../Actions/';
import MiniNote  from '../MiniNote/MiniNote';
import { Scrollbars } from 'react-custom-scrollbars';
import {withRouter} from 'react-router-dom';

class NewNote extends Component {
    componentDidMount() {
        
    }
    render() {
        return (
            
            <FlexDiv>
            <Scrollbars>
            <FlexNotes>
            
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

export default connect(mapStateToProps, { getNotes })(NewNote);