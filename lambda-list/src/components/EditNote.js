import React from 'react';
import '../App.css';

import styled from 'styled-components'

const Button = styled.button`
  background: #2ac0c4;
  border-radius: 1px;
  border: 1px solid gray;
  color: white;
  margin-top: 3%;
  padding: .75em 0em;
  width: 150px;
  font-weight: bold;
  font-size: 14px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Page = styled.div`
  
  width: 100%;
  margin: 6% 3%;

`


class EditNote extends React.Component {
    constructor() {
        super();
        this.state = {
            note: '',
            title: '',
            textBody: '',
            _id: ''
        };
    }

    componentDidMount() {
        console.log("cdm", this.props.match.params._id)
        console.log("NOTE PRops", this.props.notes)
        const note = this.props.notes.find(note => `${note._id}` === this.props.match.params._id);
        console.log("NOTE", note)
        if (note !== undefined) {
            this.setState({
                title: note.title,
                textBody: note.textBody,
                _id: note._id
            })
        }
        
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }


    render() {
        return (
            <Page className="page-header">
            <Form onSubmit={this.props.editNote(this.state._id, {title: this.state.title, textBody: this.state.textBody})}>
                <input 
                    className="input"
                    name="title"
                    type="text"
                    placeholder="Note Title"
                    onChange={this.handleChange}
                    value={this.state.title}
                    />
                    
                    
                <textarea className='text-area' 
                name="textBody"
                placeholder='Note Content' 
                rows="30" cols="50"
                onChange={this.handleChange}
                value={this.state.textBody}
                />
                
                <Button>Update</Button>
            </Form>
            </Page>
            
        )
    }
    
}
export default EditNote;