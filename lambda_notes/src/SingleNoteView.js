import React, { Component } from'react';
import SideNav from'./SideNav';


export default class SingleNoteView extends Component {

    state = {
        note: {},
       noteTitle: '',
       noteContent: '',   
    };


    componentDidMount() {
        this.setState({note: SingleNoteView });
    };

render() {
    return (
        <div>
        Hello
        </div>
    )
}
}
