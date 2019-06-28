import React from 'react';

class AddTag extends React.Component {
    constructor() {
        super();
        this.state = {
            tag: ''
        }

    }

    addTag = (event) => {
         this.setState({tag: event.target.value})
    }

    render() {
        return(
            <form>
                <input 
                    type='text'
                    name='tag'
                    placeholder='Tag'
                    onChange={this.addTag}
                    />
                    <button onClick={this.props.addTag(this.state.tag)}>Add</button>
            </form>
        )
    }
}
export default AddTag;

//