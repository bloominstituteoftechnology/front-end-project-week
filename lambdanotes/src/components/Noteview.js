import React, { Component } from 'react';
import '../styling/noteview.css';
import { Link } from 'react-router-dom';
import Delete from './Deletenote';

class Noteview extends Component {
    render() {
        return (
            <div className= 'page'>
                <div className='nav'>
                    <Link to='/Editnote'><h4 className= 'edit'>Edit</h4></Link>
                    <Delete/>
                </div>
                <h2 className= 'notename'>Note Name</h2>
                <p className= 'content'>Content fdgnfdjgndfjgndfsjngdfngjdfngdf
                dfgdfgdfgdfgdfgdfgdfgfgddddddddddgdfghtryhjdagafgdafgdfhrthrtshsd
                fgdsfghthyt</p>
            </div>
        )
    }
}

export default Noteview;