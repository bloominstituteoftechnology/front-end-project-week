import React, {component} from 'react';
import ReactDom from 'react-dom';
class Modal extends component{
    componentDidMount(){
        this.modalTarget = dociment.createElement('div');
        this.maodalTarget.className ='modal';
        document.body.appendChild(this.modalTarget);
        this._render();
    }
    _render(){
        ReactDOM.render(
        <div>{this.props.children}</div>
    );
        this.modalTarget

    }
    render(){
        return<noScript />
    }
}
export default Modal;