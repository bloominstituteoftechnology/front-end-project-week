import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import CreateNote from './CreateNote';


class Data extends Component{
constructor(props){
    super(props);
    this.state = {
    }
}
componentDidMount() {
    axios.get('https://backend-project-week.herokuapp.com').then(data=>
     this.setState({note: data.results}))
     .catch(err =>{
         errorMessage: 'error fetching data'
     } );
}

render(){
    return(
        <div class='container'>
  <div class = 'button3'>
     <h1>Lambda Notes</h1>
   <button><Link to='/Data'> View Your Notes</Link></button><br/>
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
