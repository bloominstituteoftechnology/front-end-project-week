import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Row, Col, Grid} from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';

class CreateNewNoteForm extends Component {
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
                                                value={this.state.tile}
                                                placeholder="Title"
                                                onChange={this.updateField}
                                                name={"name"}
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
                                                name={"height"}
                                            />
                                            <div className={"btn-update"}>

                                                <div className={'btn-side create-new'}>
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

// const mapStateToProps = state => {
//     const {smurfs_reducer} = state;
//     return {
//         showCreateFormL: smurfs_reducer.showCreateForm,
//     }
// };

// export default connect(mapStateToProps, {showCreateForm})(Notes);
export default CreateNewNoteForm;


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