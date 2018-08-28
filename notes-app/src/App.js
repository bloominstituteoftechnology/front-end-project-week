import React, { Component } from 'react';

import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
      this.state = {
        notes: [],
        tag: '',
        title: '',
        textBody: ''

      };
  }

  componentDidMount() {
    axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });

      
  }


  adder = event => {
    // event.preventDefault();
    

    const note = {
        tag: this.state.tag,
        title: this.state.title,
        textBody: this.state.textBody,
    }
    console.log(note);
    axios
      .post('https://killer-notes.herokuapp.com/note/create', note)
      .then(response => { console.log("post", response.data)
        this.setState({
          notes: response.data
        });
        
      }).catch(error => console.log(error))
  };




  // deleter = id => {
  //   console.log(id)
  //   axios
  //   .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
  //   .then(response => { console.log(response)
  //     this.setState({
  //       notes: response.data
  //     })
  //   }).catch(event => console.log(event))
  // }




  render() {
    return (
      <div className="App" >
      <insertFormHere></insertFormHere>
        
        {this.state.notes.map(each => (
          <Notes key={each.id} note={each} deleter={this.deleter} />
        ))}
      </div>
    );
  }
}


function Notes(props){
  return (
    <div > {props.note.textBody} x</div>
  )
} 

//{onClick={()=>{props.deleter(props.note.id)}}


export default App;
