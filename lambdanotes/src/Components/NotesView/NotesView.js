import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import DeleteNote from '/Users/sparekh/Desktop/MBP CS12/front-end-project-week/lambdanotes/src/Components/DeleteNote/DeleteNote.js';


class NotesView extends React.Component {
    constructor() {
        super()
        this.state = {
            showDelete: false,
            matched: [],
             notesArray: [
                 {
                     _id: 'ddddd1244444',
                     title: 'First Note',
                     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla varius rutrum. Sed tempor consectetur sem, in maximus tortor semper ac. Morbi dignissim ex tellus',

                 },


                 {
                    _id: 'ddhhdd12444554',
                    title: 'Second Note',
                    body: 'Nulla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla varius rutrum. Sed tempor consectetur sem, in maximus tortor semper ac. Morbi dignissim ex tellus',

                },

                {
                    _id: 'ddfffdd128884554',
                    title: 'Third Note',
                    body: 'Nulla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla varius rutrum. Sed tempor consectetur sem, in maximus tortor semper ac. Morbi dignissim ex tellus',

                },


             ]
        }
    }

componentWillMount() {
    let routedId = this.props.match.params.id;
    let matched = this.state.notesArray.filter((item) => item._id === routedId);
    this.setState({matched})
}

showModal = () => {
    this.setState({showDelete: this.state.showDelete})
}


    
    
    render() {
      
        return (
         <div className='notesView-container'>
           
            <div className='noteView-top'>
                <h3 className='content-header'>{this.state.matched[0].title}</h3>
                <div>
                    <Link to={`/edit/${this.props.match.params.id}`} className='edit-delete'>edit</Link>
                    <a href='#' className='edit-delete' onClick={this.showModal}>delete</a>
                </div>
            </div>
          <div className='noteslist'>
            <p>
                {this.state.matched[0].body}
            </p>
          </div>
          <DeleteNote toggle={this.state.showDelete}/>
        </div>
        );
    }
}

export default NotesView;