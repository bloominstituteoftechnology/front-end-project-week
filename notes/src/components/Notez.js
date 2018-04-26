import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import {fetchStuff } from '../actions.js';


class free extends Component {
  constructor(props) {
    super(props);
    this.state = {
        notes: [],
     text: '',
     title: '',
    }
  }
  componentDidMount() {
  this.props.fetchStuff();
  }
//   getFriends = () => {
//     axios
//       .get(`http://localhost:5000/notes`)
//       .then(response => {
//         this.setState({ type });
//       })  
//       .catch(err => {
//         console.log(err);
//       });
//     }


    render() {
        const { note } = this.props;
        return (
            <div>
            {this.props.notes.map(note => {
                return (
                    <div>
<Link to={{pathname: `/note/${note.id}`, state: { currentNote: note}}}>    <div key={note.id}>
                         {note.title} <br />
                        {note.text}
                         </div> </Link>
                    </div>
                )
            })}
        
        </div>
        )}
   
}
const mapStateToProps = state => {
    return {notes: state.notes}
}
export default connect(mapStateToProps, {fetchStuff})(free);