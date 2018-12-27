import React from "react";

class EditView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: null,
            title: '',
            textBody: ''
        };
    }

    componentDidMount() {
        const note = this.props.notes.find(
            note => `${note._id}` === this.props.match.params.id
        );
        this.setState(note);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.title === '' || this.props.match.params.id !== prevProps.match.params.id) {
            const note = this.props.notes.find(
                note => `${note._id}` === this.props.match.params.id
            );
            this.setState(note);
        }
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleEditSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({
            title: this.state.title,
            textBody: this.state.textBody
        },
        this.state._id
        );        
        this.props.history.push('/');
    };


    render() {
        return(
            <div className='edit-view'>
                <form onSubmit={this.handleEditSubmit}>
                    <h2>Edit Note:</h2>
                    <input 
                        type='text'
                        name='title'
                        placeholder='Note Title'
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        required
                    />
                    <textarea 
                        name='textBody'
                        placeholder='Note Content'
                        value={this.state.textBody}
                        onChange={this.handleInputChange}
                    />
                    <button className='btn' type='submit'>Update</button>
                </form>
            </div>
        );
    }
}

export default EditView;