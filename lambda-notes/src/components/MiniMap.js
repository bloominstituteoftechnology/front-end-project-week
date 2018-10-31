import React from 'react';

export default class MiniMap extends React.Component {
    
    render(){
        return (
            <div className="minimap">
                <div className={`circle one`}></div>
                <div className={`circle two`}></div>
                <div className={`circle three`}></div>
                <div className={`circle four`}></div>
                <div className={`circle five`}></div>
            </div>
        )
    }
}