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
                            <input className="note-title" type="text" placeholder="edit title" name="edit title" />
                            <input className="note-body" type="textarea" placeholder="edit content" name="edit content" />
                            <Link to="/viewnote">
                                <button className="save">Update</button>
                            </Link>
                        </form>
                    </div>
            </div>
        )
}