import React, { Component } from 'react';

import EditNote from '../minor/EditNote.js';

class NoteDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: this.props.mainProps.noteArray[this.props.match.params.id],
            modal: false,
            isInEditMode: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                {this.state.isInEditMode ? (
                    <EditNote secondProps={this.props} />
            ) : (
                    <div>
                        <div>

                        </div>
                    </div>   
                )}
            </div>
        )
    }
}

export default NoteDetail;

