import React, {Component} from 'react'
import '../App.css'
import axios from 'axios';
import DeleteModal from './DeleteModal'

class SingleNote extends Component {
    constructor(props) {
        super(props);
        this.state= {
            note: [],
            deleteNote: false,
            home:false,
        };
    }

    componentDidMount() {
        const ID = this.props.match.params.id;
        console.log(ID)
        axios.get(`https://fe-notes.herokuapp.com/note/get/${ID}`)
        .then(response => this.setState({note: response.data}))
        .catch (err => console.log(err))
    }

    deleteHandler= (event) => {
        console.log('working')
        this.setState({deleteNote: !this.state.deleteNote})
      }

      noHandler= (event) => {
        this.setState({deleteNote:false})
      }

    render(){
        let Modal = '';
        if (this.state.deleteNote === true) {Modal = <DeleteModal clickForAllHandler={this.props.clickForAllHandler} this={this} id={this.state.note._id} noHandler={this.noHandler} notes={this.state.notes}/>}
        else { Modal = ''}
        console.log(this.state.note.id)
    return (
        <div className='singleContainer'>
        {Modal}

        <div className='notesSingle'>
            <div className='button'>
                <h5>edit</h5>
                <h5 onClick={this.deleteHandler}>delete</h5>
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