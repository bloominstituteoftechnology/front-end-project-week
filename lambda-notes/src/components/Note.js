import React from 'react'
import Styled from 'styled-components';
import {Heading} from './../styles/styles';
import { Link } from 'react-router-dom';
import DeleteModal from './Delete';
import { toggleModal, getSingleNote } from './../actions';
import { connect } from 'react-redux';

const NoteContainer = Styled.div`
display: block;
width: 100%;
padding: 10px 25px;
background: #F3F3F3;
`;

const Body = Styled.p`
    font-family: 'Raleway', sans-serif;
    color: #4A4A4A;
    font-size: 14px;
    overflow: hidden;
`;
const Container = Styled.div`
  display: flex;
  width: 100%;
`;

const Edit = Styled.div`
display: flex;
width: 100%;
justify-content: flex-end;
margin-bottom: 20px;
`;
const Delete = Styled.a`
    font-size: 14px; 
    text-decoration: underline;
    &:hover {
        cursor: pointer;
    }
`;

class Note extends React.Component {
    constructor(props) {
        super(props);

    }

    openModal = (e) => {
        this.props.toggleModal();
    }

    componentDidMount(){
        console.log(this.props.match.params.id)
        this.props.getSingleNote(this.props.match.params.id);
    }

    render() {
    return (
        <Container>{console.log(this.props)}
        {this.props.showModal === true ? <DeleteModal toggleModal={this.openModal} id={this.props.location.state.id} notes={this.props.location.state.notes}/> : null}
        <NoteContainer>
            <Edit>
            <Link to={`/edit/${this.props.match.params.id}`} style={{color: '#4A4A4A', marginRight: '15px', fontSize: '14px'}}>edit</Link>
            <Delete onClick={this.openModal}>delete</Delete>
            </Edit>
        <Heading>{this.props.note.title}</Heading>
        <Body>{this.props.note.textBody}</Body>
        </NoteContainer>
        </Container>
    )
}
}


const mapStateToProps = state => {
    return {
      showModal: state.toggle.showModal,
      note: state.notes.note
    }
  }
  
  const mapActionsToProps = {
    toggleModal: toggleModal,
    getSingleNote: getSingleNote
  }
  export default connect( mapStateToProps, mapActionsToProps)(Note);