import React, { Component } from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
    width: 50%;
    margin-top: 80px;
    color: #4a494a;

    input {
        width: 400px;
    }

    textarea {
        height: 500px;
    }
`;

const Button = Styled.button`
    width: 30%;
    height: 60px;
    background-color: #2ac0c4;
    color: white;
    border: 1px solid #969696;
    cursor: pointer;
    margin-top: 20px;
`;

class NoteCreateForm extends Component {
    state = {
        tags: [],
        title: '',
        textBody: '',
    };

    componentDidMount() {
        if (this.props.isUpdating) {
            const note = this.props.note[0];
            this.setState({
                tags: note.tags,
                title: note.title,
                textBody: note.textBody,
            });
        }
    };

    handleSubmit = e => {
        if (this.props.isUpdating) {
            this.props.updateNote(this.props.note[0]._id, this.state);
            return;
        }

        this.props.addNote(e, this.state);

        
    }

    handleChange = e => {
        if (e.target.name === 'tags') {
            const tags = e.target.value.split(',');
            this.setState({tags});
            return;
        }
        
        this.setState ({
            [e.target.name]: e.target.value
        });
    };



    render() {
        return (
            <Wrapper>
                <form>
                    <p className="h4 mb-4">{this.props.isUpdating ? 'Edit Note:' : 'Create New Note:'}</p>
                    <input type="text" placeholder="Note Title" name="title" id="defaultFormContactNameEx" className="form-control" value={this.state.title} onChange={this.handleChange}/>
                    <br />
                    <input type="text" placeholder="Note Tags (Seperate with a , )" name="tags" id="defaultFormContactNameEx" className="form-control" value={this.state.tags} onChange={this.handleChange}/>
                    <br/>
                    <textarea type="text" placeholder="Note Content" name="textBody" id="defaultFormContactMessageEx" className="form-control" rows="3" value={this.state.textBody} onChange={this.handleChange}></textarea>
                    <Button type="button" onClick={this.handleSubmit}>{this.props.isUpdating ? 'Update' : 'Save'}</Button>
                    </form>
            </Wrapper>
            
        )
    }


};

export default NoteCreateForm;