import React, { Component } from 'react';
import { connect } from 'react-redux';

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

export const Card = (props) => {
    return(
        <div>
            <h5>header placeholder</h5>
            <hr />
            <p>I'm a body placeholder</p>

        </div>
    )
}
class NoteCardList extends Component {
    render() {
        return (
            <div>
                <HeaderName text = "Your Notes" />
                <Card className="card-container"/>
                {/*

                    div=============
                        card========
                            h5======
                            hr======
                            p ======
                
                
                */}
            </div>
        );
    }
}


export default connect(
    mapStateToProps,
)(NoteCardList);