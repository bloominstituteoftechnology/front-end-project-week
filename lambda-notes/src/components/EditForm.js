import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

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

    > textarea {
        padding: 20px;
        font-size: 20px;
        margin-bottom: 30px;
    }
    > div {
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

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    clickHandler = () => {
        const note = {
            title: this.state.title,
            textBody: this.state.body,
        }
        this.props.updateNote(note, this.props.id);
        this.props.history.push('/')
    }

    render() {
        return  <HomeContainer>
                    <HeaderContainer>
                        <h1>Create New Note:</h1>
                    </HeaderContainer>
                    <Form>
                        <input name='title' value={this.state.title} onChange={this.changeHandler} placeholder='Note Title' ></input>
                        <textarea name='body' value={this.state.body} onChange={this.changeHandler} placeholder='Note Content' rows="25" cols="100" ></textarea>
                        <div onClick={this.clickHandler} >Update</div>
                    </Form>
                </HomeContainer>
    }
}

const mapStateToProps = state => {
    return {id: state.active_Id}
}

export default connect(mapStateToProps, {updateNote}) (EditForm);