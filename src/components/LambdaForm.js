import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FormStyle = styled.div`
    width: 75%;
    margin-left: 20px;
`

class LambdaForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: ''
        };
    }

    componentDidMount() {
        this.setState({ title: '', content: '' });
    }

    componentWillUnmount() {
        localStorage.setItem('title', this.state.title);
        localStorage.setItem('content', this.state.content);
    }


    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleAddnote = e => {
        const note = {
            title: this.state.title,
            content: this.state.content
        };

        axios.post("http://localhost:9000/", note).then(res => {
            this.setState({
                title: '',
                content: ''
            })
            this.props.history.push('/');
        }).catch(err =>
            console.log(err))
    }


    render() {
        return (
            <FormStyle>
                <h1>Create New Note:</h1>
                <form>
                    <input style={{ width: '500px', height: '30px', marginBottom: '15px' }} type="text" name="title" placeholder="Note Title" onChange={this.handleInputChange} value={this.state.title} /><br />
                    <textarea style={{ width: '600px', height: '350px' }} type="text" name="content" placeholder="Note Content" onChange={this.handleInputChange} value={this.state.content} /><br />
                    <Link to="/"><button onClick={this.handleAddnote}>Save</button></Link>
                </form>
            </FormStyle >
        )
    }
}


export default LambdaForm;