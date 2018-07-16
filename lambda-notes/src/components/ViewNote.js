 import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import { fetchNote } from '../actions';

 class ViewNote extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.fetchingNotes ? (
                    <h1>... fetching note ...</h1>
                ) : (
                <div className='single-note'>
                    <p className='single-title'>{this.props.singleNote.title}</p>
                    <p className='single-body'>{this.props.singleNote.textBody}</p>
                </div>
                )}
                {this.props.error ? <h1>{this.props.error}</h1> : null}
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

 export default connect(mapStateToProps, { fetchNote })(ViewNote);