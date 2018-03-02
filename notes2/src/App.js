import notesDefaultSource from './components/notesDefaultSource';
import React, { Component } from 'react';
import Leftcolumn from './components/Left-column';
import leftcolumn from './components/Left-column';
import title from './components/notesDefaultSource';
import body from './components/2notesDefaultSource';

export default class App extends Component {

    notestyles = { //individual note css
        width:200,
        height:200,
        backgroundColor: 'white',
        padding: 10,
    }

    containerflow = { //container flow/size
        display: 'flex',
        width: 1200,
        flexFlow: 'row-reverse',

      }
    

    render() {
        return (
            <div style={this.containerflow}>
                <notesDefaultSource>
                    <div style={this.notestyles}><h1>{title}</h1><p>{body}</p>
                    </div>
                </notesDefaultSource>

                <notesDefaultSource>
                    <div style={this.notestyles}><h1>{title}</h1><p>{body}</p>
                    </div>
                </notesDefaultSource>

                <notesDefaultSource>
                    <div style={this.notestyles}><h1>{title}</h1><p>{body}</p>
                    </div>
                </notesDefaultSource>
                
                <notesDefaultSource>
                    <div style={this.notestyles}><h1>{title}</h1><p>{body}</p>
                    </div>
                </notesDefaultSource>

                <Leftcolumn style={leftcolumn}>
                </Leftcolumn>
            </div>

            )
        }
};
