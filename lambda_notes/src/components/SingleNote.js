import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { fetchSingleNote } from '../actions';
import DeleteModal from './Delete';

const Content = styled.div`
    width: 666px;
    padding-top: 20px;
    padding-left: 3.48rem;
`

const NoteBody = styled.div`
    clear: both
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
                <DeleteModal id={this.props.note._id}/>
                <Link to={`/edit/${this.props.note._id}`}>
                    <Text>edit</Text>
                </Link>
                <NoteBody>
                    <h1>{this.props.note.title}</h1>
                    <p>{this.props.note.textBody}</p>
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