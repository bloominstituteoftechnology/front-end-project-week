import React, { Component } from 'react';
import Sidebar from './Sidebar';

export default class Listview extends Component {
    render() {
        return (
            <div className="container">
                <div clssName="row">
                    <div className="column">
                        <Sidebar />
                    </div>
                </div>
            </div>
        )
    }
};