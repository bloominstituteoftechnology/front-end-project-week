import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state={
            id: '',
            title:'',
            content:'',
            updating:false
        }
    }
       

    // componentDidMount() {
    //     console.log("is component firing?", this.state, this.state.isUpdating)
    //     if (this.props.isUpdating){
    //         this.setState({
    //             title: this.props.isUpdating.title,
    //             content: this.props.isUpdating.content,
    //             updating: true
    //         })
    //     }
    //   }

    componentDidMount() {
        const id = this.props.match.params.id;

        console.log("is component firing?", this.state, this.state.isUpdating)
        axios
            .put(`http://localhost:3300/api/notes/${id}`)
            .then(res => {
                console.log('CDM DATA:', res.data);
                if (this.props.isUpdating) {
                    this.setState({
                        title: this.props.isUpdating.title,
                        content: this.props.isUpdating.content,
                        updating: true
                    });
                };
            })
            .catch(err => console.error('ERROR:', err));
    };

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log('edit props:', this.props)
        if (this.state.updating){
            const editedNote = {
                title: this.state.title,
                content: this.state.content,
                id: this.props.match.params.id,
            }
            console.log('handleSubmit:', editedNote)
            this.props.editingNote(editedNote)
            console.log('this1:', this.props.editingNote)
            this.props.history.push('/list-view')
        }
    }
    
    render(){
        return(
            <Form>
                <H2>Edit Note:</H2>
                <InputTitle
                    type='text'
                    placeholder='Note Title...'
                    name='title'
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <InputContent 
                     type='text'
                     placeholder='Note Content...'
                     name='content'
                     value={this.state.content}  
                     onChange={this.handleChange}             
                />
                <Button onClick={this.handleSubmit}>Update</Button>
            </Form>
        )
    }
}

const Form = styled.form`
    margin: 38px 4% 0 4%;
    display:flex;
    flex-direction:column;
`;

const H2 = styled.h2`
    font-size: 1.25rem;
    margin-bottom: 30px;
`;

const InputTitle = styled.input`
    width: 56.5%;
    height: 40px;
    border-radius: 5px;
    padding-left: 1.5%;
    border:1px solid grey;
`;

const InputContent = styled.input`
    width: 98.75%;
    height: 345px;
    border-radius: 5px;
    margin: 10px 0;
    border:1px solid grey;
`;

const Button = styled.button`
    color:white;
    background-color: #2BC1C4;
    width: 31.5%;
    height: 45px;
    font-weight:bold;
    font-size:1rem;
    border: 1px solid grey;
`;

export default withRouter(EditNote);