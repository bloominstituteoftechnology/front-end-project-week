import React from 'react';

let dialogStyles = {
    width: '500px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '999',
    backgroundColor: '#eee',
    padding: '10px 20px 40px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
};

class Modal extends React.Component {

    deleteMethod = () => {
        // console.log("HI")
        this.props.delete();
    }

    render() {
        if(!this.props.show){
            return null;
        }   
        return (
            <div style={dialogStyles}>
                    <h1>DO YOU WISH TO DELETE?</h1>
                    <button onClick={this.deleteMethod}>YES</button>

                    <button onClick={this.props.onClose}>No</button>
            </div>
        )
    }
}

export default Modal