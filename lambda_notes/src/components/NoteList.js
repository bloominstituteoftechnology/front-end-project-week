import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';

import Note from './Note';

const Content = styled.div`
    width: 666px;
    padding-top: 20px;
    padding-left: 3rem;
    padding-right: 3rem;
`

const Notes = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`
class NoteList extends React.Component {
    componentDidMount () {
        this.props.fetchNotes()
      }
    
    render () {
        return (
            <Content>
                <h1>Your Notes:</h1>
                <Notes>
                    {this.props.notes.map(note =>
                    <Link
                        to={`/notes/${note._id}`}
                        key={note._id}
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

export default connect(mapStateToProps,{fetchNotes})(NoteList);