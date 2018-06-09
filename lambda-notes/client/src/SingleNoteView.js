import React, { Component } from 'react';
import './index.css';
import Sidebar from './Sidebar';


class SingleNoteView extends Component{
    constructor(props){
        super(props);
        this.state ={
        };
    }

    componentWillMount(){
        console.log("THIS",this.props.location.state[0].dummydata); //this directly accesses the array of note objects
        let routeId = this.props.match.params.id;
        console.log("THISFORID",this.props.match.params.id);
        let matched = this.props.location.state[0].dummydata.filter((noteItem)=> 
          noteItem.id === Number(routeId)
     );
     console.log ("this matches", matched);
     return this.setState(matched);


    }


    render(){
        console.log(this.state);
        return(
            <div className="single-note-component-wrapper">
            <Sidebar />
            <div className="singular-note-container">
                <h2>{this.state[0].note_title}</h2>
                <p>{this.state[0].note_body}</p>
            </div>
            </div>
        )
    }
}







    
    

export default SingleNoteView;
