import React, { Component } from 'react';
import SideBar from '../Sidebar/sidebar';
import './notecard.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class NoteCard extends Component {
    state={
        id: 0,
        note: {
            title: '',
            content: ''
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        const nuNote =  this.props.notes.filter((note) => {
            return note.id == id});
        this.setState({id: id});
        this.setState({ note: nuNote[0] });

    }

    render() {
        return (
            <div className="card-page-container">
                <SideBar />
                <div className="section-container"> 
                    <div className="edit-delete">
                        <Link to={`/edit/${this.state.id}`}>
                         <a> edit </a> 
                         </Link>  
                         <a> delete </a>
                     </div>
                    <h1 className="notes-title card "> {this.state.note.title}</h1>
                    <a className="single-notes-content"> {this.state.note.content} </a>
                 </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        notes: state.notes
      }
   }

export default connect (mapStateToProps) (NoteCard);
