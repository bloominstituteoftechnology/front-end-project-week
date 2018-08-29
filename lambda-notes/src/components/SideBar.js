import React from 'react';

const SideBar = (props) => {
    return(
        <div className='sidebar'>
            <h1>Lambda Notes</h1>
            <button 
                className='button-style'
                onClick= {() =>
                    {this.props.clickHandler('/notes')}}
            >
            View Your Notes
            </button>
            <button 
                className='button-style'
                onClick= {() =>
                    {this.props.clickHandler('/create')}}
            >
            + Create New Note
            </button>
        </div>
    );
}

export default SideBar;
