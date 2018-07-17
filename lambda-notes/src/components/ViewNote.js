 import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import { Link } from 'react-router-dom';
 import { getNew } from '../actions';
 import '../styles/ViewNote.css';

 class ViewNote extends Component {

    // grabs newly created note from local storage
     componentDidMount() {
         if(localStorage.getItem('newNote')) {
            this.props.getNew();
         }
     }

     // destroys note on local storage so that this component will function normally when selecting exisiting notes
     componentWillUnmount() {
         if(localStorage.getItem('newNote')) {
             localStorage.removeItem('newNote');
         } else return;
     }

    render() {
        return (
            <React.Fragment>
                <div className='options'>
                    <Link to={`/note/${this.props.id}/delete`}>Delete</Link>
                </div>
                <React.Fragment>
                    {/* waits for notes to fetch then displays notes */}
                    {this.props.fetchingNotes ? (
                        <h1>... fetching note ...</h1>
                    ) : (
                    <React.Fragment>
                    {/* displays error if no note find by the id */}
                    {this.props.singleNote.errorMessage ? (
                    <h1>{this.props.singleNote.errorMessage}</h1>
                    ) : (
                    <div className='single-note'>
                        <p className='single-title'>{this.props.singleNote.title}</p>
                        <p className='single-body'>{this.props.singleNote.textBody}</p>
                    </div>
                    ) }
                    </React.Fragment>
                    )}
                    {/* displays error if error response from sever */}
                    {this.props.error ? <h1>{this.props.error}</h1> : null}
                </React.Fragment>
            </React.Fragment>
        )
     }
 }

 const mapStateToProps = state => {
     return {
         singleNote: state.singleNote,
         fetchingNotes: state.fetchingNotes,
         error: state.error,
     }
 }

 export default connect(mapStateToProps, { getNew })(ViewNote);