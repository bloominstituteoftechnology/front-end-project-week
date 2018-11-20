import React from 'react';
import Dialog from '@material-ui/core/Dialog';


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
                <button className="button" onClick={this.handleClickOpen}>Open dialog</button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    >
                        <p>Hi</p>
                        <button onClick={this.handleClose}>Yes</button>
                        <button onClick={this.handleClose}>No</button>
                    </Dialog>
            </div>
        )
    }
}

export default AlertDialogue;