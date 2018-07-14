import React, { Component } from 'react';

class Signout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notesList : []
        };
    }

    logout = (event) => {
        console.log(this.props)
        if (localStorage.getItem('jwt')) {
            console.log("logging out now", event)
            const newNotes = this.state.notesList;
            this.props.fetch(newNotes);
            localStorage.removeItem('jwt');
            //this.props.history.push('/Logout');
            console.log(this.state.notesList)

        }
    }



    render() {
        return (
                <div>
                    <button type='submit' onClick={this.logout} >Sign out</button>
                </div>
            
        )
    }
}

export default Signout;