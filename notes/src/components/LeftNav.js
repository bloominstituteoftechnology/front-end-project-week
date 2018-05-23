import React, { Component } from 'react';


export default class LeftNav extends Component {
    render() {
        return (
            <div className="container">
                <div clssName="row">
                    <div className="column">
                        <LeftNav />
                    </div>
                </div>
            </div>
        )
    }
};