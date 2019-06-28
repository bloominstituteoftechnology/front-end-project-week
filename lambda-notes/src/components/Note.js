import React from 'react'
import Styled from 'styled-components';
import {Heading} from './../styles/styles';
import { Link } from 'react-router-dom';
import DeleteModal from './Delete';
import { toggleModal, getSingleNote, updateNote } from './../actions';
import { connect } from 'react-redux';
import ListForm from './ListForm';

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

const ListHeading = Styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #4A4A4A;
    font-size: 18px;
    align-self: flex-start;
`;

const ListContainer = Styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0;
`;

const ListItem = Styled.li`
    list-style: none;
    color: #4A4A4A;
`;


class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {},
            completed: false
        }
    }

    openModal = (e) => {
        this.props.toggleModal();
    }

    toggleFlag = () => {
        this.setState({completed: !this.state.completed})
    }

    componentDidMount(){
        this.props.getSingleNote(this.props.match.params.id);
        this.setState({note: this.props.note})
    }



    render() {
    return (
        <Container>
        {this.props.showModal === true ? <DeleteModal toggleModal={this.openModal} id={this.props.match.params.id}/> : null}
        <NoteContainer>
            <Edit>
            <Link to={`/edit/${this.props.match.params.id}`} style={{color: '#4A4A4A', marginRight: '15px', fontSize: '14px'}}>edit</Link>
            <Delete onClick={this.openModal}>delete</Delete>
            </Edit>
        <Heading>{this.props.note.title}</Heading>
        <Body>{this.props.note.textBody}</Body>
      {this.props.note.checkList ? 
        <ListContainer>
            <ListHeading>Checklist</ListHeading>
            <ul>
            {this.state.checkList.map(item => {
                return <div>
                    <ListItem>
                    <input 
                        type='checkbox' 
                        id='checkbox'  
                        onClick={()=>this.toggleFlag()} 
                        style={{marginRight: '15px'}}
                        />
                        {item}
                        </ListItem>
                        </div>  
                    })}
                  
                    </ul>
                <ListForm  addItem={this.addListItem}/>
            </ListContainer> : null}


       
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
    getSingleNote: getSingleNote,
    updateNote: updateNote
  }
  export default connect( mapStateToProps, mapActionsToProps)(Note);