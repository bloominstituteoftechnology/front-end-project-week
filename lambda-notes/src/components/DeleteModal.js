import React from 'react';
import { Alert } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'




const DeleteModal = (props) => {
    return (
        <div>
            <Alert color="light">
                <h2 className="alert-heading">are you sure you want to delete this?</h2>
                <div>
                    <Button color="danger" size= "lg">Delete</Button>{' '}
                    <Button color="info" size="lg">No</Button>
                </div>
                <hr />
                
            </Alert>
        </div>
    );
};

Button.propTypes = {
    active: PropTypes.bool,
    block: PropTypes.bool,
    color: PropTypes.string, // default: 'secondary'
    disabled: PropTypes.bool,

    // Pass in a Component to override default button element
    // example: react-router Link
    // default: 'button'
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

    // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
    innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

    onClick: PropTypes.func,
    size: PropTypes.string
};




export default DeleteModal;







