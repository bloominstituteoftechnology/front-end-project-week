import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Leftnav extends Component {
    


    render() {
        return(
            <div>
            <h1>Lambda Notes</h1>
            <Link to={'/'} > <button text="View Notes" /> </Link>
            <Link to={'/create'} > <button text="+ Create New Note" /> </Link>

            </div>
        )
    }
}