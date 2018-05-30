import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NoteCardList.css';

function mapStateToProps(state) {
    return {
        state:state.notes
    };
}

export const HeaderName = (props) => {
    return (
        <h3>{props.text}</h3>
    )
}

class NoteCardList extends Component {
    constructor(props){
        super(props);
        this.state = {
            notes:[],
        };
    }
    render() {
        return (
            <div className = "main-container">
                <HeaderName text = "Your Notes" />
                <div className="card-container">
                    <div className="text-wrapper">
                        <h4>header placeholder</h4>
                        <p>I'm a body placeholder</p>
                    </div>
                </div>            
            </div>
        );
    }
}


export default connect(
    mapStateToProps,
)(NoteCardList);