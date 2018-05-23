import React, { Component } from 'react';
import Notes from '../func/Notes';



class NoteList extends Component{
    constructor(props){
        super(props);
}

    
    render(){
        console.log(this.props.NoteData);
        return (
            <div>
                {this.props.NoteData.map((data, index)=> <Notes key={index} NoteData={data}/>
                    
                )}
            </div>
        )
    }
}

export default NoteList;