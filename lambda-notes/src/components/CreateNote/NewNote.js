import React from 'react' 
import { H2, TitleInput, ContentInput, Button, TagInput, H1 } from '../StyledComponents';
import { Route, Redirect } from 'react-router'

class Note extends React.Component {
    state = {
        title: '',
        textBody: '',
        tags: '',
        created: false 
    }

    onInputChnage = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSumbit = event => {
        console.log(this.state.tags.split(','))
        this.props.addNewNote({
            title: this.state.title,
            textBody: this.state.textBody,
            tags: this.state.tags.split(','),
        })
        this.setState({
            created: true
        })
    }

    render(){
        if (this.state.toDashboard)
            return (<H1>Notes Added...</H1>)
            
        return (
            <div className="newNote">
                <TitleInput onChange={ this.onInputChnage } type="text" name="title" placeholder="Note Title"/>
                <ContentInput onChange={ this.onInputChnage }  type="text" name="textBody" rows="40" col="5"placeholder="Note Content" wrap="soft"/>
                <TagInput onChange={ this.onInputChnage } type="text" name="tags" placeholder="Enter the tags (separate them with commas)"/>
                <Button onClick={this.onSumbit} submit>Submit</Button>
            </div>
        )
    }
}

function NewNote (props){
    return (
        <div className="appView">
            <H2>Create New Note:</H2>
            <Note {...props} />
        </div>
    )
}

export default NewNote
