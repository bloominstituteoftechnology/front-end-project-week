import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import CreateNote from './CreateNote';


class Data extends Component{
constructor(props){
    super(props);
    this.state = {
        notes:[
            {id:1,
            Title:'Note title',
Body:'The main objective of this week is to develop the MVP feature selisted below using react and any other technologies you have learned here a Lambda School. There are design files in this repository you should use as a creative guide'
},
{id:2,
Title:'Note title',
Body:'The main objective of this week is to develop the MVP feature selisted below using react and any other technologies you have learned here a Lambda School. There are design files in this repository you should use as a creative guide'
},
{id:3,
    Title:'Note title',
    Body:'The main objective of this week is to develop the MVP feature selisted below using react and any other technologies you have learned here a Lambda School. There are design files in this repository you should use as a creative guide'
    },
{id:4,
Title:'Note title',
 Body:'The main objective of this week is to develop the MVP feature selisted below using react and any other technologies you have learned here a Lambda School. There are design files in this repository you should use as a creative guide'
},
{id:5,
 Title:'Note title',
Body:'The main objective of this week is to develop the MVP feature selisted below using react and any other technologies you have learned here a Lambda School. There are design files in this repository you should use as a creative guide'
},
{id:6,
Title:'Note title',
Body:'The main objective of this week is to develop the MVP feature selisted below using react and any other technologies you have learned here a Lambda School. There are design files in this repository you should use as a creative guide'
},
{id:7,
Title:'Note title',
 Body:'The main objective of this week is to develop the MVP feature selisted below using react and any other technologies you have learned here a Lambda School. There are design files in this repository you should use as a creative guide'
},
{id:8,
Title:'Note title',
Body:'The main objective of this week is to develop the MVP feature selisted below using react and any other technologies you have learned here a Lambda School. There are design files in this repository you should use as a creative guide'},
{id:9,
Title:'Note title',
 Body:'The main objective of this week is to develop the MVP feature selisted below using react and any other technologies you have learned here a Lambda School. There are design files in this repository you should use as a creative guide'},

 ],
    }
}


render(){
    return(
        <div class='container'>
  <div class = 'button3'>
     <h1>Lambda Notes</h1>
   <button><Link to='/Data:id'> View Your Notes</Link></button><br/>
   <button><Link to='/CreateNote'> +Create your Notes</Link></button>
   </div>
        <div className='view'>
        {this.state.notes.map((note) =>{
return (
<div className='note'>
       <p key={note.id}>{note.Title}<br/>{note.Body}</p>
       </div>
)
        })}
        </div>
        
        </div>
    )
}
}
export default Data;
