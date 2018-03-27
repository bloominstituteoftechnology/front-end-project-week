import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NoteCard from '../components/NoteCard';
import Button from '../components/Button';
import './NoteList.css';

class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        notesList: [{title: 'Note Title', note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit rutrum est eu laoreet. Nunc mollis augue sit amet est pellentesque placerat. Sed augue arcu, auctor sed purus quis, elementum vulputate libero. Proin vestibulum congue aliquam. Sed lacinia et felis id elementum. Donec auctor luctus fermentum. Praesent aliquam in ex ac ornare. Integer vulputate bibendum est vitae consectetur.' },{title:'Note Title', note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit rutrum est eu laoreet. Nunc mollis augue sit amet est pellentesque placerat. Sed augue arcu, auctor sed purus quis, elementum vulputate libero. Proin vestibulum congue aliquam. Sed lacinia et felis id elementum. Donec auctor luctus fermentum. Praesent aliquam in ex ac ornare. Integer vulputate bibendum est vitae consectetur.'},{title:'Note Title', note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit rutrum est eu laoreet. Nunc mollis augue sit amet est pellentesque placerat. Sed augue arcu, auctor sed purus quis, elementum vulputate libero. Proin vestibulum congue aliquam. Sed lacinia et felis id elementum. Donec auctor luctus fermentum. Praesent aliquam in ex ac ornare. Integer vulputate bibendum est vitae consectetur.'},{title:'Note Title' , note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit rutrum est eu laoreet. Nunc mollis augue sit amet est pellentesque placerat. Sed augue arcu, auctor sed purus quis, elementum vulputate libero. Proin vestibulum congue aliquam. Sed lacinia et felis id elementum. Donec auctor luctus fermentum. Praesent aliquam in ex ac ornare. Integer vulputate bibendum est vitae consectetur.'},{title:'Note Title' , note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit rutrum est eu laoreet. Nunc mollis augue sit amet est pellentesque placerat. Sed augue arcu, auctor sed purus quis, elementum vulputate libero. Proin vestibulum congue aliquam. Sed lacinia et felis id elementum. Donec auctor luctus fermentum. Praesent aliquam in ex ac ornare. Integer vulputate bibendum est vitae consectetur.'},{title:'Note Title' , note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit rutrum est eu laoreet. Nunc mollis augue sit amet est pellentesque placerat. Sed augue arcu, auctor sed purus quis, elementum vulputate libero. Proin vestibulum congue aliquam. Sed lacinia et felis id elementum. Donec auctor luctus fermentum. Praesent aliquam in ex ac ornare. Integer vulputate bibendum est vitae consectetur.'},{title:'Note Title' , note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit rutrum est eu laoreet. Nunc mollis augue sit amet est pellentesque placerat. Sed augue arcu, auctor sed purus quis, elementum vulputate libero. Proin vestibulum congue aliquam. Sed lacinia et felis id elementum. Donec auctor luctus fermentum. Praesent aliquam in ex ac ornare. Integer vulputate bibendum est vitae consectetur.'},{title:'Note Title' , note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit rutrum est eu laoreet. Nunc mollis augue sit amet est pellentesque placerat. Sed augue arcu, auctor sed purus quis, elementum vulputate libero. Proin vestibulum congue aliquam. Sed lacinia et felis id elementum. Donec auctor luctus fermentum. Praesent aliquam in ex ac ornare. Integer vulputate bibendum est vitae consectetur.'},{title:'Note Title', note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit rutrum est eu laoreet. Nunc mollis augue sit amet est pellentesque placerat. Sed augue arcu, auctor sed purus quis, elementum vulputate libero. Proin vestibulum congue aliquam. Sed lacinia et felis id elementum. Donec auctor luctus fermentum. Praesent aliquam in ex ac ornare. Integer vulputate bibendum est vitae consectetur.'},],
        
    };
  }  
render() {
     return (
        <div className="container-fluid">
      <div className="row  App">
        <div className="col-md-3 col-sm-12 indexCol">
          <div className="titleContainer">
            <div > <h1 className="mainTitle"> Lambda </h1> </div>
            <div > <h1 className="mainTitle"> Notes </h1> </div>
            <div> <Button name={'View Your Notes'}/> </div>
          </div>
        <Link to={'/create-note'}>  
          <div> <Button name={'+Create New Notes'}/> </div>
        </Link>  
        </div>
       
        <div className="col-md-9 col-sm-12 noteCardCol">
        <div className="listTitle"> <h4> Your Notes: </h4> </div>
         
            
        <div className="row">
          {this.state.notesList.map((note, i)=> {
            return (
       <div key={i} className="col-sm-6 col-md-4"><Link to={'/note-view'}> <NoteCard title={note.title} note={note.note}/></Link> </div> 
            ) 
          })}  
        </div>
              

          
        </div>
      </div> 
    </div> // end of container 


            
    );
  }  
}

export default NotesList;