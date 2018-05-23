import React from 'react';

const noteView = () => {
    return (
        <div>
            <container className='NVcontainer'>
                <div className='NVsidebar'>
                    <div className='heading-container'>
                        <p className='heading-font'><strong>Lambda Notes</strong>
                    </p>
                    </div>
                    
                    <div>
                        <button className='button'>View Your Notes</button>
                    </div>
                    <div>
                        <button className='DL button'>+ Create New Notes</button>
                    </div>
                </div>
            </container>
        </div>
    );
};

export default noteView;