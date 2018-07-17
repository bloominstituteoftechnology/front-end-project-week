import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchSingleNote } from '../actions';
import DeleteModal from './Delete';
const Content = styled.div`
    width: 666px;
    padding-top: 20px;
    padding-left: 3.48rem;
`

class SingleNote extends React.Component {
    componentDidMount () {
        const id = this.props.match.params.id;
        this.props.fetchSingleNote(id)
    }

    render() { 
        return (
            <Content>
                <DeleteModal/>
                <h1>{this.props.note.title}</h1>
                <p>{this.props.note.textBody}</p>
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