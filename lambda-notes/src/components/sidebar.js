import React from 'react'; 
import '../components/sidebar.css'

export default class Sidebar extends React.Component {
    render(){
      return(
          <div>
            <h1>Lambda Notes</h1> 
            <p className="button"> View Your Notes </p> 
            <p className="button"> +Create A New Note </p> 
          </div> 
        )
    }
}