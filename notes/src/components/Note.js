import React, { Component } from 'react';
import axios from '../../node_modules/axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Note extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     note: null
    //     // };
    // }

    componentDidMount() {
        
        // const id = this.props.match.notes._id;
        // this.getNote(id);
    }

    // getNote = id => {
    //     axios 
    //         .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
    //         .then(response => {
    //             console.log('Response:' + response);
    //             this.setState(() => ({ note: response.data }));
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // };

    render() {
        return (
            
                <div className='note-container'>
                
                
                    <h3>
                        Title: {this.props.note.title}
                    </h3>
                    <p>
                        Body: {this.props.note.textBody}
                    </p>
                    

                </div>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
    };
  }

export default connect(
    mapStateToProps,
)(Note);