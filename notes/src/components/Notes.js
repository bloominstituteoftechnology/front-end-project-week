import React, {Component} from 'react';
import {Row, Grid, Col} from 'react-bootstrap';
import {getNotes} from '../actions'
import styled from 'styled-components';
import {connect} from 'react-redux';
import Loading from './Loading'

class Notes extends Component {

    componentDidMount() {
        this.props.getNotes();
    }

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
                                            <div key={index} md={4} className={'note-container'}>

                                                <div className={"note-title"}>
                                                    {note.title}
                                                </div>
                                                <div className={"note-description"}>
                                                    {note.description}
                                                </div>

                                            </div>
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
    }
};

export default connect(mapStateToProps, {getNotes})(Notes);


const NotesContainer = styled.div`

        .notes-box{
            border:5px solid yellow:
            display: flex;
            justify-content: space-between;
            padding-left:5px;
            padding-right:5px;
                
                
                .note-container{
                    border:1px solid #A7A7A7;
                    color:#71595A;
                    margin:10px 10px 10px 10px;
                    padding:8px 18px 8px 18px;
                    flex-grow: 1;
                    flex-basis: 250px;
                    background-color:#FFFFFF;
                    
                        .note-title{
                            font-weight:bold;
                            border-bottom:1px solid #AEAEAE;
                            width:100% !important;
                            margin-bottom: 5px;
                        }
                        
                        .note-description{
                            min-height:90px;
                        }
                }
        }
        
        .no-notes {
            text-align:center;
            font-size: 20px;
            margin-top:20px;
        }
        
`;