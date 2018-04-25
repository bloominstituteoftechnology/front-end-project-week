import React from 'react';
import { Link } from 'react-router-dom';

export class EditNote extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-9 right__side">
                <div className="row">
                    <div className="col-3">
                        <h4>Edit Note</h4>
                    </div>
                    <div className="row">
                        <form>
                            <input type="text" placeholder="edit title" name="edit title" />
                            <input type="textarea" placeholder="edit content" name="edit content" />
                            <Link to="/viewnote">
                                <button>Update</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}