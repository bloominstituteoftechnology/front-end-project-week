import React, {Component} from 'react';

class Button extends Component {
    render() {
        return(
            <div>
                <button>{this.props.text}</button>
            </div>
        );
    }
}

export default Button;