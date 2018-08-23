import React, { Component } from 'react';
import './index.css'
import { Link } from 'react-router-dom';
import { DeleteNote } from '..';
import { connect } from 'react-redux';


class ViewNote extends Component {
            state = {
            note : [],
        }
    
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentDidMount()  {
        const id = this.props.match.params.id
        let matched = this.props.notes.filter(note => note.id === Number(id) )
       console.log(matched)
        const [ note ] = matched;
        this.setState({ note })
    }

    render() {
        return (
            <div className='main-container'>
            <div className="header">
                <div className="nav">
                <Link to='/delete'><h5>delete</h5></Link>
                <Link to={`/edit/${this.props.match.params.id}`}><h5>edit</h5></Link>
                </div>
                <div className='tittle-header'>
                   <h4>{this.state.note.title}</h4>
                </div>
                <div>
                    {this.state.note.body}
                </div>
            </div>
            <DeleteNote />
        </div>
        );
    }
}

const mapStateToprops = state => ({
    notes : state.notes
})
export default connect(mapStateToprops,null)(ViewNote);