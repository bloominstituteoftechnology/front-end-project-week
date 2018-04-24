import React from 'react';

const noteDetail = props => {

    return (
        <div className='col-9 right__side'>
            <div className="row">
                <div>
                    <h4>{props.note.title}</h4>
                </div>
            </div>
        </div>
    );
};

export default noteDetail;