// *** === Imports === *** //
// React
import React, {
    Component,
    Fragment
} from 'react';

// Styles
import {
    Logo,
    Form,
    TitleInput,
    TextBodyInput,
    FormButton
} from '../styles'


// *** === Class Component === *** //
class NoteForm extends Component {
    // ** == Constructor == **
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            textBody: ''
        };
    };

    // ** == Methods == **
    componentDidMount = () => {
        if (this.props.update) {
            this.setState({
                title: this.props.note.title,
                textBody: this.props.note.textBody
            })
        }
    };

    // ** == Action Handlers == **
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.update ? this.props.handleUpdate(this.state) : this.props.handleCreate(this.state);
    };

    // ** == Render to DOM == **
    render() {
        return (
            <>
                {
                    this.props.update ?
                    <Logo>Edit Note</Logo> :
                    <Logo>Add Note</Logo>
                }

                <Form onSubmit={this.handleSubmit}>
                    <TitleInput
                        type='text'
                        name='title'
                        placeholder='Type Title Here'
                        value={
                            this.state.title
                        }
                        onChange={
                            this.handleChange
                        }
                    />

                    <TextBodyInput
                        type='text'
                        name='textBody'
                        placeholder='Type Text Here'
                        value={
                            this.state.textBody
                        }
                        onChange = {
                            this.handleChange
                        }
                    />

                    {
                        this.props.update ?
                            <FormButton
                                type='submit'
                                value='Update Note'
                            />
                        :
                            <FormButton
                                type='submit'
                                value='Create Note'
                            />
                    }
                </Form>
            </>
        )
    };
}


// *** === Default Export === *** //
export default NoteForm;