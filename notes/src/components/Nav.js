import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNotes, deleteImportant } from '../actions';

class Nav extends Component {
    constructor() {
        super();
    }

    render() {
            return (
                <div className='nav'>
                    <h1 className='nav-title'>Lambda Notes</h1>
                    <div className='nav-links'>
                        <NavLink className='nav-link' to='/'>View Your Notes</NavLink>
                        <NavLink className='nav-link' to='/add'>+ Create New Note</NavLink>
                        <div 
                            className='nav-link' 
                            onClick={() => Promise.all(this.props.deleteImportant(this.props.importantNotes)).then(() => this.props.fetchNotes())}>
                            Delete Important Notes
                        </div>
                    </div>
                </div>
            );
        }
}

const mapStateToProps = state => {
    return {
        importantNotes: state.importantNotes,
    };
};

export default connect(mapStateToProps, { fetchNotes, deleteImportant })(Nav);