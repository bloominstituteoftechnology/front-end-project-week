import React, { Component } from 'react';

import SelectMode from './SelectMode';
import DefaultMode from './DefaultMode'


class NoteForm extends Component {

    render() {
        return (
            <>
            {
                this.props.selectMode
                ? <SelectMode {...this.props}/>
                : <DefaultMode {...this.props}/>
            }
            </>
        );
    }
}


export default NoteForm;

