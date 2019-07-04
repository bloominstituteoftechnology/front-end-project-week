import React from 'react';
import MobileNav from './MobileNav';
import { 
    FormWrapper, 
    Form, 
    FormInputTitle, 
    FormInputText, 
    FormButton 
} from '../style';

class EditANote extends React.Component {
    constructor(props){
        super(props);
       this.state = {
           title: '',
           textBody: '' 
       }
    }

    componentDidMount = () => {
        const note = this.props.notes.find( note  => { return this.props.match.params.id === `${note._id}`})
        console.log(note.title)
        this.setState({
        title: note.title,
        textBody: note.textBody
        })
    };
    handleChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    };


    submitHandler = (event) => {
        event.preventDefault();
        this.props.editNote(
            {   
                title: this.state.title, 
                textBody: this.state.textBody
            },
            this.props.match.params.id
        )
        this.props.history.push('/')
    }

    render(){
        return(
            <FormWrapper>
                <MobileNav/>
                <h2>Edit Note</h2>
                   
                <Form onSubmit={this.submitHandler}>
                    <FormInputTitle
                        className='title'
                        type='text'
                        maxLength='50'
                        name='title'
                        onChange={this.handleChange}
                        placeholder='Enter Title'
                        value={this.state.title}
                    />

                    <FormInputText
                      className='text'
                      type='text'
                      name='textBody'
                      onChange={this.handleChange}
                      placeholder='Enter Text'
                      value={this.state.textBody}
                    />
                    <FormButton>Edit Note</FormButton>
                </Form>
        </FormWrapper>
        )
    }
}

export default EditANote