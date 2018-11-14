import React from 'react'; 
import Note from './Note.js'; 

export default class Notes extends React.Component {
    constructor(props){
        super(props); 
    }
    render(){
        return(
            <div>
                <Note /> 
            </div> 
        )
    }
}