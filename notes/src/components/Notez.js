import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import {fetchStuff } from '../actions.js';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';


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
            <div><h2 className="notesHeader pl-5">Your Notes:</h2>
            {this.props.notes.map(note => {
                return (
                    <div className="rightSide">
                    
<Link to={{pathname: `/note/${note.id}`, state: { currentNote: note}}}>    
                    <Card key={note.id}>
                            <CardBody>
                        <CardTitle className="titleCard"> {note.title}</CardTitle>
                       <CardText> {note.text}</CardText>
                         </CardBody>
                         </Card> 
                         </Link>
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