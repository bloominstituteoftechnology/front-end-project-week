import React, { Component } from 'react';
import './NotePreview.css';

class NotePreview extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            props: this.state
        }
    }    

    render() {
        return (
            <div>
                <div className="note-preview-container">
                    <div className="note-preview-inner-container">
                        <div className="note-preview-title">{this.props.title}</div>
                        <div className="note-preview-content">
                            {this.props.content.substring(0,110) + "..."}
                        </div>
                    </div>

                    {/* could map over the notes that exist in state, then have them individually represented by each NoteThumbnail */}
                </div>
            </div>
        )
    }
}



export default NotePreview;