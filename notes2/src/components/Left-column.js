import React, { Component } from 'react';

export default class Leftcolumn extends Component {

    button = {
        display: 'flex',
        flexFlow: 'column',
        textAlign: 'center',
        width: 300,
        height: 50,
        marginTop: 10,

    }

    container = {
        width: 120,
        height: 45,
        marginRight: 200,
        backgroundColor: 'lightblue',
   
    }

    header = {
        textAlign: 'left',
    }

    render() {
        return (
            <body style={this.button}>
                <div>
                    <div style={this.header}>
                        <h2>Lambda Notes</h2>
                    </div>
                    
                    <div style={this.container}>
                        <button style={this.container}>
                        View Your Notes
                        </button>
                    </div>

                    <div style={this.container}>
                        <button style={this.container}>
                        +Create New Note
                        </button>
                    </div>

                </div>
            </body>
        )
    }
};
