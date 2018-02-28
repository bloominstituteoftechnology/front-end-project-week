import notesDefaultSource from './components/notesDefaultSource';
import React, { Component } from 'react';

export default class App extends Component {

    render() {
        return (
            <div>
                <notesDefaultSource class="beard">
                    <div class="beard">{notesDefaultSource}
                    </div>
                </notesDefaultSource>
                <notesDefaultSource>
                    <div>{notesDefaultSource}
                    </div>
                </notesDefaultSource>
                <notesDefaultSource>
                    <div>{notesDefaultSource}
                    </div>
                </notesDefaultSource>
                <notesDefaultSource>
                    <div>{notesDefaultSource}
                    </div>
                </notesDefaultSource>
            </div>
            
            )
        }
};

