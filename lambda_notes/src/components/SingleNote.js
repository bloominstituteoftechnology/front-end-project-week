import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { fetchSingleNote } from '../actions';
// import DeleteModal from './Delete';

const Content = styled.div`
    width: 666px;
    padding-top: 20px;
    padding-left: 2.7rem;
    padding-right: 2.7rem;
`

const Title = styled.h2`
    margin-top: 3.5rem;
    margin-bottom: 1.5rem;
    padding: 0;     
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    letter-spacing: .8px;
`;

const NoteContent = styled.p`
  margin-top: 2.7rem;
  font-size: 1.5rem;
  padding-right: 6rem;
  line-height: 1.7;
  font-family: 'Raleway', sans-serif;
`;

const NoteBody = styled.div`
    clear: both
    width: 666px;
`
const Text = styled.div`
    text-decoration: underline;
    display: inline-block;
    float: right;
    margin-right: 10px;
    color: black;
`

class SingleNote extends React.Component {
    componentDidMount () {
        const id = this.props.match.params.id;
        this.props.fetchSingleNote(id)
    }
 
    render() { 
        return (
            <Content>
                {/* <DeleteModal id={this.props.note._id}/> */}
                <Link to={`/edit/${this.props.note.id}`}>
                    <Text>edit</Text>
                </Link>
                <NoteBody>
                    <Title>{this.props.note.title}</Title>
                    <NoteContent>{this.props.note.content}</NoteContent>
                </NoteBody>
            </Content>
        );
    }
}

const mapStateToProps = state => {
    return {
        note: state.note
    }
}
 
export default connect(mapStateToProps, {fetchSingleNote})(SingleNote);