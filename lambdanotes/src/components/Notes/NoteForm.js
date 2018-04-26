import React from 'react'
import '../../App.css';
import './NoteCard.css'
import {Form, Input, FormGroup, Button} from 'reactstrap'
import {Link} from 'react-router-dom';
class NoteForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        };
    }

    handleInputText = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleClick = (e) => {
        this.props.onSubmit(this.state.title, this.state.content);
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
                                <Input className='NoteDetail__textarea' type="textarea" name="content" id="noteDetail" placeholder="Note Detail" col={60} onChange={this.handleInputText}/>
                            </FormGroup>
                            <Link to={'/'}>
                            <Button onClick={this.handleClick}>Save</Button>
                            </Link>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default NoteForm