import React from 'react';
import { MiniBox, TruncatedText, MaskText, Title, DeleteButton, DownloadButton } from '../StyledComponents/StyledComponents';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import {connect} from 'react-redux';


const MiniNote = (props) => {
    return (
        <Link style={{textDecoration:'none', color: 'black'}} to={`/${props.note.id}`}>
        <MiniBox className='test'>
        <Link to={`/${props.note.id}/delete`}> <DeleteButton><i class="fas fa-trash"></i></DeleteButton></Link>
        <Title>{props.note.note_title}</Title>
        
        <TruncatedText>{props.note.text_body}</TruncatedText>
        <MaskText/>
        </MiniBox>
        </Link>
    );
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
    }
}
export default connect(mapStateToProps, null)(MiniNote);
