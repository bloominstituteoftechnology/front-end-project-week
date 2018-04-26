import React from 'react';
import { Link } from 'react-router-dom';

export const EditNote = props => {
        return (
            <div className="col-9 right__side">
                <div className="row">
                    <div className="col-3">
                        <h4>Edit Note</h4>
                    </div>
                </div>
                    <div className="row col-4">
                        <form>
                            <input className="note-title" type="text" placeholder="edit title" name="edit title" onChange={this.handleInputText}/>
                            <input className="note-body" type="textarea" placeholder="edit content" name="edit content" onChange={this.handleInputText} />
                            <Link to="/viewnote">
                                <button className="save" onClick={this.handleClicked}>Update</button>
                            </Link>
                        </form>
                    </div>
            </div>
        )
}
function handleInputText(e) {
    this.setState({ [e.target.name]: e.target.value });
};
function handleClicked(e) {
     this.props.onSubmit(this.state.title, this.state.body);;
};