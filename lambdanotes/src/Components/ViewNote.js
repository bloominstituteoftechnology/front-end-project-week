import React, {Component} from 'react';

class ViewNote extends Component {
    state = {
        note: '',
        details: '',
    }

    render() {
        return (
        <div>
            <h1>{this.props.note}</h1>
            <p>{this.props.details}</p>
        </div>
    )
    }
}

export default ViewNote