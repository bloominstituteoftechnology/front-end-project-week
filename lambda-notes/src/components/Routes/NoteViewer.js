import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Main = styled.div`
    margin-left: 400px;
    display: flex;
    flex-wrap: wrap;`

const NoteContainer = styled.div`
margin 20px;
width: 200px;
height: 150px;
`



class NoteViewer extends Component {

    state = {
        note: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const note = this.props.notes.filter(note => id === note._id.toString())
        this.setState({ note: note[0] })

    }

    render() {
        console.log(this.state)
        const { title, textBody, _id } = this.state.note;
        return (
            < Main >
                <Link to={`/edit-note/${_id}`}><div>edit</div></Link>
                <Link to='/delete-note'><div>delete</div></Link>
                <div>
                    <NoteContainer>
                        <h1>{title}</h1>
                        <div>{textBody}</div>
                    </NoteContainer>
                </div>
            </Main>
        )
    }
}

const mapStateToProps = state => {
    return { notes: state.notesReducer.notes };
}

export default connect(mapStateToProps, {})(NoteViewer);
