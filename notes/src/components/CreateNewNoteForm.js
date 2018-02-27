import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Row, Col, Grid} from 'react-bootstrap';
import styled from 'styled-components';
import {addNote} from '../actions'
import {connect} from 'react-redux';

class CreateNewNoteForm extends Component {
    state = {
        notes: [],
        title: '',
        description: '',
        tags: '',
    };

    updateField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    addNote = () => {
        this.props.addNote(this.state);
    };

    render() {
        return (
            <CreateNewNoteFormContainer>
                <Grid>
                    <Row className="show-grid">
                        <h3 className={'top-title'}>Create New Note:</h3>
                    </Row>

                    <Row>
                        <Grid>
                            <Row className="show-grid">
                                <Col md={6} className={"col-up"}>
                                    <form>
                                        <FormGroup>
                                            <FormControl
                                                type="text"
                                                value={this.state.title}
                                                placeholder="Title"
                                                onChange={this.updateField}
                                                name={"title"}
                                            />
                                            <br/>
                                            <FormControl
                                                componentClass="textarea"
                                                type="textarea"
                                                value={this.state.description}
                                                placeholder="Description"
                                                onChange={this.updateField}
                                                name={"description"}
                                            />
                                            <br/>
                                            <FormControl
                                                type="text"
                                                value={this.state.tags}
                                                placeholder="Tags"
                                                onChange={this.updateField}
                                                name={"tags"}
                                            />
                                            <div className={"btn-update"}>

                                                <div onClick={() => {this.addNote()}} className={'btn-side create-new'}>
                                                    <div className={"btn-text"}> Save </div>
                                                </div>

                                                {/*<button onClick={(e) => {this.submitCreate(e)}} className={"btn btn-primary btn-md"}>  Save  </button>*/}
                                                &nbsp;&nbsp;&nbsp;
                                                {/*<button onClick={(e) => {this.cancelCreate(e)}} className={"btn btn-danger btn-md"}>  Cancel  </button>*/}
                                            </div>
                                        </FormGroup>
                                    </form>
                                </Col>
                            </Row>
                        </Grid>
                    </Row>

                </Grid>
            </CreateNewNoteFormContainer>

        )}

}

export default connect(null, {addNote})(CreateNewNoteForm);


const CreateNewNoteFormContainer = styled.div`
    text-align:left;
    margin-top:10px;

        .title-form {
            text-align:center;
            padding:0px;
        }

        .col-up {
            // margin:0px auto;
        }

        .btn-update{
            text-align:center;
            margin-top:15px;
        }
        
        .create-new{
            width:65%
        }

`;