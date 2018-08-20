import React, {Component} from 'react';

class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            content: ''
         }
    }

    change = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    }

    render() { 

        const {title, content} = this.state;
        return ( 
            <form>
                <input
                    type='text'
                    name='title'
                    placeholder='Note title'
                    value={title}
                    onChange={(event) => this.change(event)}
                />
                <textarea
                    type='text'
                    name='content'
                    placeholder='Note content'
                    value={content}
                    onChange={this.change}
                />

                <button>Save</button>
            </form>
         );
    }
}
 
export default NewNote;