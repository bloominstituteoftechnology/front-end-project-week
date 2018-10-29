import React from 'react';



function ListView(props) {
    return (
        <div className='list-container'>
            {props.list.map(note => note.data)}   
        </div>  //return what from map?  key?   note undefined.
    )
};
export default ListView;