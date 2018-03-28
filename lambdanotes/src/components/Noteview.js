import React, { Component } from 'react';
import '../styling/noteview.css';

class Noteview extends Component {
    render() {
        return (
            <div className= 'page'>
                <div className='nav'>
                    <h4 className= 'edit'>Edit</h4>
                    <h4 className= 'delete'>Delete</h4>
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