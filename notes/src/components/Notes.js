import React, {Component} from 'react';
import {Row, Grid} from 'react-bootstrap';
import {getNotes, getSingleNote} from '../actions'
import styled from 'styled-components';
import {connect} from 'react-redux';
import Loading from './Loading'
import {BrowserRouter as Router, Link} from "react-router-dom";

class Notes extends Component {

    componentDidMount() {
        this.props.getNotes();
    }

    goNoteDetails = (note) => {
        this.props.getSingleNote(note);
    };

    processTags = (tags) => {

        // console.log('tags group', tags);
    };

    render() {
        return (
            <NotesContainer>
                <Grid>
                    <Row className="show-grid">
                        <h3 className={'top-title'}>Your Notes:</h3>
                    </Row>

                    {(this.props.fetching)
                        ? <Loading/>
                        : (this.props.notes.length > 0)
                            ?
                                <Row className={'notes-box'}>
                                    {this.props.notes.map((note, index) => {
                                        return (
                                            <Link to={`/details/${note.id}`}
                                                  key={index} md={4} className={'note-container'}
                                                  onClick={() => {this.goNoteDetails(note)}}
                                            >

                                                <div className={"note-title"}>
                                                    {note.title}
                                                </div>
                                                <div className={"note-description"}>
                                                    {note.description}
                                                </div>
                                                <div className={"note-tags"}>
                                                    <span className={'tags-label'}>TAGS:</span>
                                                    &nbsp;{note.tags.split(/[ ,]+/).join(', ')}
                                                </div>

                                            </Link>
                                        );
                                    })}
                                </Row>
                            :
                                <div className={"no-notes"}>
                                    You don't have  Notes yet. <br/>
                                    <a href={"/create_new_note"}>Please add new note</a>
                                </div>
                    }
                </Grid>
            </NotesContainer>
        )}
}

const mapStateToProps = state => {
    const {notes_reducer} = state;
    return {
        notes: notes_reducer.notes,
        fetching: notes_reducer.fetching,
        singleNote: notes_reducer.singleNote,
    }
};

export default connect(mapStateToProps, {getNotes, getSingleNote})(Notes);


const NotesContainer = styled.div`

        .notes-box{
            border:5px solid yellow:
            display: flex;
            justify-content: flex-start;
            padding-left:5px;
            padding-right:5px;
                
                .note-container{
                    flex-grow: 1;
                    flex-basis: 250px;
                    max-width: 250px;
                    // min-height:214px;
                    // max-height:214px;
                    
                    border:1px solid #A7A7A7;
                    color:#71595A;
                    margin:10px 10px 10px 10px;
                    padding:8px 18px 8px 18px;
                    background-color:#FFFFFF;
                    
                    display: flex;
                    flex-direction:column;  
                    justify-content:flex-end;                 
                
                        .note-title{
                            color:#4a4a4a;
                            font-weight:bold;
                            border-bottom:1px solid #AEAEAE;
                            width:100% !important;
                            margin-bottom: 5px;
                        }
                         
                        
                        .note-description{
                            overflow: hidden;
                            min-height:90px;
                            max-height:90px;
                            margin-bottom:15px;
                        }
                        
                        .note-tags{
                            border:0px solid black;
                            font-size:10px;
                            color:grey;
                            margin-bottom:5px;
                            
                                
                                .tags-label{
                                    text-align:left;
                                    font-weight:bold;
                                }
                                
                        }
                }
        }
        
        .no-notes {
            text-align:center;
            font-size: 20px;
            margin-top:20px;
        }
        
`;