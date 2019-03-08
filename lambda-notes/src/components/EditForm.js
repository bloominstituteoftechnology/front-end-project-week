import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';

import { HomeContainer, HeaderContainer } from './Home';
import { updateNote } from '../actions/actions';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;    
    > input {
        height: 40px;
        width: 55%;
        padding: 10px;
        font-size: 20px;
        margin-bottom: 30px;
    }

    > .quill {
        height: 600px;
        width: 100%;
        margin-bottom: 50px;
        background-color: white;
        border: none;
        font-size: 22px;
    }
    > .update {
        color: white;
        background-color: #16ccc9;
        width: 28.3%;
        height: 60px;
        font-size: 22px;
        border: 1px solid #8e8b8b;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bolder;
        cursor: pointer;
        &:hover {
            color: #16ccc9;
            background-color: white;
            border: 1px solid #16ccc9
        }
    }
`

class EditForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: '',
        }
    }

    componentDidMount() {
        const note = this.props.notes.find(note => note._id === this.props.id)
        this.setState({
            title: note.title,
            body: note.textBody
        })
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    clickHandler = () => {
        const note = {
            title: this.state.title,
            textBody: this.state.body,
        }
        this.props.updateNote(note, this.props.id);
        this.props.history.push(`/note/${this.props.id}`);
        this.setState({
            title:'',
            body: ''
        })
    }

    handleChange = value => this.setState({body: value})

    render() {
        return  <HomeContainer>
                    <HeaderContainer>
                        <h1>Edit Note:</h1>
                    </HeaderContainer>
                    <Form>
                        <input name='title' value={this.state.title} onChange={this.changeHandler} placeholder='Note Title' ></input>
                        <ReactQuill className='quill' value={this.state.body} onChange={this.handleChange} />
                        <div className='update' onClick={this.clickHandler} >Update</div>
                    </Form>
                </HomeContainer>
    }
}

const mapStateToProps = state => {
    return {
        id: state.active_Id,
        notes: state.notes
    }
}

export default connect(mapStateToProps, {updateNote}) (EditForm);