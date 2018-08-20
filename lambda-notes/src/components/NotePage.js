import React, {Component} from 'react';
import dummyData from '../dummy-data';

class NotePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({ note: dummyData[id -1]})
      }

    render () {
        return (
            <div>
                <h2>{this.state.note.title}</h2>
                <p>{this.state.note.content}</p>
            </div>
        )
    }
}

export default NotePage;