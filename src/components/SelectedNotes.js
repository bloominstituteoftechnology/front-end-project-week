import React from 'react'; 
import data from './Data'; 
import ShowNote from './ShowNote';
import LeftPanal from './LeftPanal';
import Myheader from './Myheader';
import {Link} from 'react-router-dom';




class SelectedNotes extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            notes: data,
        }
    }
     
    showSelected(){
       const p =  this.state.notes.filter(el => this.props.match.params.id == el.id)
       return p[0];
    }

    render(){
        
        return (
            <div className="container0">
            <LeftPanal />
            <SingleHeader p={this.showSelected()}/>

        <div className="container1">
        <ShowNote p={this.showSelected()} c='single-note'/>
        </div>
                
            </div>
            
        );
    }


    
}

const  SingleHeader= (props) => {
    return (
        <div>
            {console.log('inside singleHeader',props)}
            <Link to={`/editNote/${props.p.id}`}>edit</Link>
            <Link to={`/deleteNote/${props.p.id}`}>delete</Link>
        </div>

    )
}



export default SelectedNotes; 



  