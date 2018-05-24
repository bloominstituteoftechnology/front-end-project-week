import React, { Component } from 'react';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>{this.props.notesFromState.map( (item, index)=> {
                return (
                    <div>
                        <div>{item.title}</div>
                        <div>{item.content}</div>
                    </div>
                )
            })}</div>
        );
    }
}

export default Cards;