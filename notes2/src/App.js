import notesDefaultSource from './components/notesDefaultSource';
import React, { Component } from 'react';

export default class App extends Component {

    notestyles = { //individual note css
        width:200,
        height:200,
        backgroundColor: 'grey',
        padding: 10,
    }

    containerflow = { //container flow/size
        display: 'flex',
        width: 1200,
        flexFlow: 'row-reverse',
      }

    render() {
        return (
            <div class="containerflow" style={this.containerflow}>
                <notesDefaultSource id="beard">
                    <div style={this.notestyles}>{notesDefaultSource}
                    </div>
                </notesDefaultSource>
                <notesDefaultSource id="beard">
                    <div style={this.notestyles}>{notesDefaultSource}
                    </div>
                </notesDefaultSource>
                <notesDefaultSource id="beard">
                    <div style={this.notestyles}>{notesDefaultSource}
                    </div>
                </notesDefaultSource>
                <notesDefaultSource id="beard">
                    <div style={this.notestyles}>{notesDefaultSource}
                    </div>
                </notesDefaultSource>
            </div>
            
            )
        }
};

