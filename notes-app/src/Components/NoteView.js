import React, {Component} from 'react';
import axios from 'axios';
import '../index.css';


class NoteView extends Component {
    constructor(){
      super()
        this.state = {
          notes: [],
          tags: '',
          title: '',
          textBody: ''
  
        };
    }
  
    componentDidMount() {
      this.getNotes();
    }
  
    getNotes = () => {
      axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
    }

    render() {
        console.log("view this:", this.state.notes[0])
        return (
                <div>
                    {/* {this.state.notes[0]}
                    {this.state.notes[0]} */}
                </div>
                );
        
      }
    }


export default NoteView;


// const NoteView = (match, props) => {
//     console.log("NoteView:",)
//     return (
//     <div>
//         <h3>{match.match.params.id}</h3>
//     </div>);
// }









// (match, props)


// const NoteView = (match, props) => {
//     console.log("NoteView:",)
//     return (
//     <div>
//         <h3>{match.match.params.id}</h3>
//     </div>);
// }