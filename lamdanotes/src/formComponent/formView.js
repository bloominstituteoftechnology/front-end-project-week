import React, { Component } from 'react';

import Form from './form.js';

class FormView extends Component {
    constructor() {
      super();
      this.state = {
        notes: [
            {
                tags: [],
                textBody: "",
                title: "",
                _v: 0,
                _id: Date.now()
            }
        ]
      }
    }

    render() {
        return(
            <div>
                <Form />
            </div>
        )
    }
}

export default FormView