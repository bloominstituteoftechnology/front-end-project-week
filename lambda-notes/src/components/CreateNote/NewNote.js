import React from 'react' 
import { H2, TitleInput, ContentInput, Button } from '../StyledComponents';

class Note extends React.Component {
    state = {
        title: '',
        content: '',
    }

    render(){
        return (
            <div className="newNote">
                <TitleInput type="text" name="title" placeholder="Note Title"/>
                <ContentInput type="text" name="content" rows="40" col="5"placeholder="Note Content" wrap="soft"/>
                <Button submit>Submit</Button>
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
