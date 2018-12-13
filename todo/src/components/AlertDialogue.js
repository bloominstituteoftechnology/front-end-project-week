import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import NoteView from './NoteView';

// realized I don't need a separate component for this, so moved this functionality to NoteView

class AlertDialogue extends React.Component { 
    state = { 
        open: false
    }

    handleClickOpen = () => {
        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({open: false})
    }

    render(){
        return (
            <div className="alert-dialogue">
                <button className="button" onClick={this.handleClickOpen}>Delete Note</button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    >
                        <p>Are you sure you want to delete this note? I haven't learned enough React to undelete notes.</p>
                        <button onClick={this.handleClose}>Cancel</button>
                        <button onClick={this.handleClose}>Delete</button>
                    </Dialog>
            </div>
        )
    }
}

export default AlertDialogue;