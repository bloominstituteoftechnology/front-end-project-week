import React, { Component } from 'react';
import './index.css'
import { Link } from 'react-router-dom';
import { DeleteNote } from '..';
import { connect } from 'react-redux';


class ViewNote extends Component {
            state = {
            note : [],
            toggleDelete : false
        }
    
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentDidMount()  {
        const id = this.props.match.params.id
        let matched = this.props.notes.filter(note => note.id === Number(id) )
        const [ note ] = matched;
        this.setState({ note })
    }

    render() {
        return (
            <div className='main-container'>
            <div className="header">
                <div className="nav">
                <a href="#" onClick={ this.showModal }>delete</a>
                <Link to={`/edit/${this.props.match.params.id}`}><a>edit</a></Link>
                </div>
                <div className='tittle-header'>
                   <h4>{this.state.note.title}</h4>
                </div>
                <div>
                    {this.state.note.body}
                </div>
            </div>
            <DeleteNote 
            toggle = {this.state.toggleDelete}
            history ={ this.props.history}
            id ={ this.props.match.params.id}
            showModal ={ this.showModal }
            />
        </div>
        );
    }

    showModal = () =>{
        this.setState({ toggleDelete : !this.state.toggleDelete})
    }
}

const mapStateToprops = state => ({
    notes : state.notes
})
export default connect(mapStateToprops,null)(ViewNote);