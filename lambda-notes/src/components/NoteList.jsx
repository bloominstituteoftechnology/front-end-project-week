import React, { Fragment } from 'react';
import { Note } from './Note';
import { componentDidMount } from 'react-pure-lifecycle';

const getDemNotes = ({ noteGetter }) => noteGetter();

const NoteList = ({ notes }) => (
  <Fragment>
    <h2 className="App-title">Your Notes</h2>
    <div className="Notes">{notes.map((note, i) => <Note key={i} {...note} />)}</div>
  </Fragment>
);

export default componentDidMount(getDemNotes)(NoteList);

// connects front end to the back end
// export class NoteList extends React.Component {
//   state = {
//     notes: [],
//   };
//   componentDidMount() {
//     //when component does mount I want an axois get request to happen
//     //axios lets you do http request
//     //get request at that url
//     axios
//       .get('http://localhost:5000/api/notes')
//       .then((response) => {
//         // array of notes
//         // response from the notes request on the server
//         this.setState({ notes: response.data });
//         // set notes to notes you got from server in response.data
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   render() {
//     return (
//       <div>
//         <div className="Notes">
//           {this.state.notes.map((note, i) => (
//             <div>
//               <Note key={i} {...note} />
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
