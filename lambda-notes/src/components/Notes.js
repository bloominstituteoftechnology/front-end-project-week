import React , { Component } from 'react';

export default class Notes extends Component {
 
    render() {
        console.log(this.props)
        return (
            <div>
               <h3>{this.props.title}</h3>
               <p>{this.props.textBody}</p>
            </div>
        )
    }
}