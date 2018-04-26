import React from 'react'
import '../../App.css';
import {Form, Input, Button, FormGroup} from 'reactstrap'
class NoteForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: ''
        };
    }

    handleInputText = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        return (
            <div className='col-9 right__side'>
                <div className='row'>
                    <div className="col-3">
                        <h4>Create New Note:</h4>
                    </div>
                </div>
                <div className="row">
                    <div className='col-9'>
                        <Form>
                            <FormGroup>
                                <Input  type="text" name="title" id="noteTitle" placeholder="Note Title" onChange={this.handleInputText}/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="textarea" name="detail" id="noteDetail" placeholder="Note Detail" onChange={this.handleInputText}/>
                            </FormGroup>
                            <a href={'/'} onClick={this.props.addNote(this.state.title, this.state.content)}>Save</a>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default NoteForm