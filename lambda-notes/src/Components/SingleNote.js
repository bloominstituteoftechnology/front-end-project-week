import React, {Component} from 'react'
import '../App.css'
import axios from 'axios';
import DeleteModal from './DeleteModal'

class SingleNote extends Component {
    constructor(props) {
        super(props);
        this.state= {
            note: [],
            delete: false,
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
        <div className='singleContainer'>
        <div className='notesSingle'>
            <div className='button'>
                <h5>edit</h5>
                <h5 onClick={this.props.deleteHandler}>delete</h5>
            </div>
            <h3>{this.state.note.title}</h3>
            <div className='line'></div>
            <p className='fullText'>{this.state.note.textBody}</p>

        </div>
        </div>
    )
}
}

export default SingleNote;