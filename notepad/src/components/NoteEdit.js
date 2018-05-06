import React, { Component } from 'react';
import { editNote, getNote } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class NoteEdit extends Component {
    constructor(props){
        super(props);
        const { note } = props;
        this.state = {
            id: this.props.note.id,
            title: props.note.title,
            content: props.note.content
        };

    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getNote(id);
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

saveNote = e => {
    const { id, title, content} = this.state;
    // e.preventDefault();
    console.log("SAVING", this.state);
    this.props.editNote(this.state);
    this.props.history.push(`/notes/`)
}

// renderTextField() {
//     // if (this.props.mode != 'edit') return null;
//     return (
//         <TextField type='text' floatingLabelText='Image URL' onChange={this.onImageUrlChange}></TextField>
//     )
// }

    render(){
        // const { value } = this.state;
        return (
            < div key={this.props.note.id} className={'noteform'} >
                <div>
                    <h5>Edit Note:</h5>
                    <Form>
                        <FormGroup row>
                            <Col sm={10}>
                                <Input 
                                    defaultValue={this.state.title}
                                    type="text"
                                    name="title"
                                    // id="title"
                                    onChange={this.handleChange}
                                    // value={this.state.title}
                                    placeholder="Title"
                                    // ref={(input) => this.input = input}

                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={10}>
                                <Input rows="15"
                                    type="textarea"
                                    placeholder="Your Dreams Begin Here"
                                    onChange={this.handleChange}
                                    value={this.state.content}
                                    name="content"
                                    id="content"

                                    // placeholder={this.props.location.state.content}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm="1">
                                <Button color="info" onClick={this.saveNote}>Update</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div >


            // //     <div className={'note'}>
            // //         <input>{this.props.note.title}</input>
            // //         <p>{this.props.note.content}</p>

            // </div >

        );
    }    
}

// updatingNote: false,


const mapStateToProps = state => {
    return {
        note: state.note
    };
};
export default connect(mapStateToProps, { editNote, getNote })(NoteEdit);
