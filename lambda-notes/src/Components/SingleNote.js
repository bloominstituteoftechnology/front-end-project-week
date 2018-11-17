import React, {Component} from 'react'
import '../App.css'
import axios from 'axios';
class SingleNote extends Component {
    constructor(props) {
        super(props);
        this.state= {
            note: [],
        };
    }

    componentDidMount() {
        const ID = this.props.match.params.id;
        console.log(ID)
        axios.get(`https://fe-notes.herokuapp.com/note/get/${ID}`)
        .then(response => this.setState({note: response.data}))
        .catch (err => console.log(err))
    

    }

    render(){
        console.log(this.state.note)
    return (
        <div className='notesSingle'>
            <h3>{this.state.note.title}</h3>
            <div className='line'></div>
            <p>{this.state.note.textBody}</p>

        </div>
    )
}
}

export default SingleNote;