import React, { Component } from 'react';
import Delete from './Delete';
import Redirect from 'react-router-dom/Redirect';
import axios from 'axios';
import { getNotes } from './exampleNotes'

class List extends Component {


        deleteNote = () => {
            this.props.deleteNote(this.props.match.params.id);
            this.props.push('/');
            this.setState({ deleting: false });
        }

        cancelDelete = () => {
            this.props.push('/');
            this.setState({ deleting: false });
        }

        componentDidMount() {
            axios.get('http://localhost:3000/list')
            .then (res => {
                this.setState(() => ({ getNotes }));
            })
            .catch((error) => {
                alert('Server error: Please try again later.');
            });
        }

    render() {
        return (
            <div className="Notes">
                <div><h1>Your Notes:</h1>
                    <ul className="inner-notes">
                        {this.props.notes.map(notes => {
                            return (
                                <li className="note-container-list" key={notes.id}>
                                    <h2>{notes.title}<hr/></h2>
                                    <p>{notes.text}<br/></p>
                                </li>
                            )
                        })}
                    </ul>
                </div>

            </div>
        );
      }
  };
  export default List;