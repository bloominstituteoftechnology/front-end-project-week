import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';

import Note from './Note';

const Content = styled.div`
    width: 666px;
    padding-top: 5.2rem;
    padding-left: 2.6rem;
    padding-right: 3rem;
`

const Notes = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin-top: 1.3rem;
`

const Header = styled.p`
    margin: 0;
    padding: 0;     
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    letter-spacing: .5px;
`
class NoteList extends React.Component {
    componentDidMount() {
        this.props.fetchNotes()
    }

    render() {
        return (
            <Content>
                <Header>Your Notes:</Header>
                <Notes>
                    {this.props.notes.map(note =>
                        <Link
                            to={`/notes/${note.id}`}
                            key={note.id}
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            <Note note={note} />
                        </Link>
                    )}
                </Notes>
            </Content>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps, { fetchNotes })(NoteList);