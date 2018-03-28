import React, {Component} from 'react';
import{Link} from 'react-router-dom';
export default class ListView extends Component{
render(){
return(
    
    <div class='container'>
    <div class = 'button3'>
    <h1>Lambda Notes</h1>
    <button><Link to='/ListView'> View Your Notes</Link></button><br/>
    <button><Link to='/CreateNote'> +Create your Notes</Link></button>
    </div>
    <div class= 'view'>
<h3>Note Title</h3>
<p>The main objective of this week is to develop the MVP feature set 
    listed below using react and any other technologies you have learned here at
     Lambda School. There are design files in this repository you should use as a creative guide.</p>
</div>
<div class= 'view'>
<h3>Note Title</h3>
<p>The main objective of this week is to develop the MVP feature set 
    listed below using react and any other technologies you have learned here at
     Lambda School. There are design files in this repository you should use as a creative guide.</p>
</div>
<div class= 'view'>
<h3>Note Title</h3>
<p>The main objective of this week is to develop the MVP feature set 
    listed below using react and any other technologies you have learned here at
     Lambda School. There are design files in this repository you should use as a creative guide.</p>
</div>

</div>
);
}
}
