import React, { Component } from 'react';


export const todo = props => {
    return (
        <div>
            {props.dummyData.map( (item) => {
                <div>
                        {props.dummyData.item}
                </div>  
                })
            }
        </div>
        );
}