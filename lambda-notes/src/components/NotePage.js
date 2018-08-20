import React, {Component} from 'react';

class NotePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {}
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({ note: this.props.data[id -1]})
      }

    render () {
        return (
            <div className="note-page">
                <h2>{this.state.note.title}</h2>
                <p>{this.state.note.content}</p>
            </div>
        )
    }
}

export default NotePage;