import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingNotes } from '../../actions/index';
import SingleNote from './Note'
import styled from 'styled-components';

const Header = styled.div`
display: flex;
width: 100%;
`

const Main = styled.div`
    margin-left: 400px;
    display: flex;
    flex-wrap: wrap;`


class ViewNotes extends Component {

    componentDidMount() {
        this.props.fetchingNotes();
    };

    render() {
        return (
            < Main >
                <Header><h1>Your Notes:</h1></Header>
                {this.props.notes.map(note => (
                    <SingleNote key={note._id} note={note} />
                ))}
            </Main >
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notesReducer.notes
    };
}

export default connect(mapStateToProps, { fetchingNotes })(ViewNotes);