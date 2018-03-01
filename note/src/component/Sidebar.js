import React from 'react';
import Button from './Button';

const SideBar = () => {
    return (
        <div className='SideBar-Container'>
            <h1>Lambda Notes</h1>
            <Button text='View Your Notes' />
            <Button text='+Create New Note' />
        </div>
    );
}

export default SideBar;