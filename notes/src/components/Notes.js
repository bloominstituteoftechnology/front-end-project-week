import React, {Component} from 'react';
// import CreateSmurfForm from './CreateSmurfForm'
import {Row, Grid, Col} from 'react-bootstrap';
// import {showCreateForm} from '../actions'
import styled from 'styled-components';
// import {connect} from 'react-redux';
// import ActionButtons from '../components/ActionButtons';
import axios from 'axios';

class Notes extends Component {
    state = {
        notes: [],
    };

    componentDidMount() {

        const notes = axios.get('http://localhost:3333/notes/')
        .then(response => {

            console.log('response.data',response.data)
            this.setState({notes:response.data });

        }).catch(err => {

                console.log('err.err', err)

        });

        console.log('this are the notes', notes.data);
    }

    // showCreateForm = (val) => {
    //     // val is true when click
    //     this.props.showCreateForm(val);
    //     this.setState({showButtonHideForm: false});
    // };
    //
    // showThisActionsBox = (e, index, value, smurf) => {
    //     this.setState({actionBtns: 'showActionBtns'});
    // };
    //
    // hideThisActionsBox = (e, value) => {
    //     this.setState({actionBtns: 'hideActionBtns'});
    // };

    render() {
        return (
            <NotesContainer>
                <Grid>
                    <Row className="show-grid">
                        <h3 className={'top-title'}>Your Notes:</h3>
                    </Row>

                    <Row className={'notes-box'}>

                        {this.state.notes.map((note, index) => {
                            return (
                                <div key={index} md={4} className={'note-container'} >

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
                </Grid>
            </NotesContainer>

        )}

}

// const mapStateToProps = state => {
//     const {smurfs_reducer} = state;
//     return {
//         showCreateFormL: smurfs_reducer.showCreateForm,
//     }
// };

// export default connect(mapStateToProps, {showCreateForm})(Notes);
export default Notes;


const NotesContainer = styled.div`

        .notes-box{
            border:5px solid yellow:
            display: flex;
            justify-content: space-between;
            padding-left:5px;
            padding-right:5px;
                
                
                .note-container{
                    border:1px solid #A7A7A7;
                    margin:10px 10px 10px 10px;
                    padding:8px 18px 8px 18px;
                    flex-grow: 1;
                    color:#71595A;
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
        
`;