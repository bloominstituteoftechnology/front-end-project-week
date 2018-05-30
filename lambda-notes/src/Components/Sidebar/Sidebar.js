import React, { Component } from 'react';
import './Sidebar.css';

const Button = (props) => {
    return (
        <button className = {`${props.className}`}>{props.text}</button>
    )
}

class Sidebar extends Component {
    render() {
        return (
            <div className = "sidebar-wrapper">
                <h1 className = "app-header">Lambda <br/>Notes</h1>
                <Button className="button-view" text={`View Your Notes`}/>
                <Button className = "button-create" text ={`+ Create a Note`}/>
            </div>
        );
    }
}

export default Sidebar;
