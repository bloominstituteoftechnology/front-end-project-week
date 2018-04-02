import React from 'react';

const Note = (props) => {
    return (
        icons.map(icon =>
           <section>
                    <p key ={icon.id} >{icon.title}</p>
                    <hr/>
                    <p>{icon.content}</p>
            </section>));


};

export default Note;