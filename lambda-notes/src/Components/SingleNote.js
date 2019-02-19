import React, {Component} from 'react'
import '../App.css'
import axios from 'axios';
import DeleteModal from './DeleteModal'
import {BrowserRouter as Router,Route, NavLink} from 'react-router-dom';

class SingleNote extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state= {
            note: [],
            deleteNote: false,
            home:false,
            
        };
    }

    componentDidMount() {
        this._isMounted = true;
        const ID = this.props.match.params.id;
        console.log("componentdidmount",ID)
        axios.get(`http://localhost:4444/note/${ID}`)
        .then(response => {
            if (this._isMounted) {
            console.log(response)
            this.setState({note: response.data})
        }
        })
        .catch (err => console.log(err))
    }

    componentWillUnmount(){
        this._isMounted = false;
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
        if (this.state.deleteNote === true) {Modal = <DeleteModal clickForAllHandler={this.props.clickForAllHandler} id={this.state.note.id} noHandler={this.noHandler} notes={this.state.notes}/>}
        else { Modal = ''}
    return (
        <div className='singleContainer'>
        {Modal}

        <div className='notesSingle'>
            <div className='button'>
            <NavLink activeClassName='selected' to={{pathname: `/note/edit/${this.props.match.params.id}`, state:{ID: this.props.match.params.id, title: this.state.note.title, textBody: this.state.note.textBody}}}>
            <h5>edit</h5>
            </NavLink>
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