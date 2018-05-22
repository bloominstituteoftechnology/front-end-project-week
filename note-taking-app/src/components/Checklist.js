import React from 'react';

const Checklist = ({content}) => {
    const list = content ? content.split('\n') : []

    return (
        <div>
            { list.map((item,index) => 
                <div key={index}>
                    <input type='checkbox' name='item'/>
                    <label htmlFor={`${item}`}>{item}</label>
                </div>
            )}
        </div>
    )
}

export default Checklist;