// import React, { Component } from 'react';
// import './App.css';
// import { Container, Row, Col, Button } from 'reactstrap';
// import { getNotes } from './dummyNotes';

// class App extends Component {
//   state = {
//     notes: [
//       {
//         id: 1,
//         title: 'Donec tincidunt!',
//         message:
//           'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat magnam aspernatur beatae laudantium, optio harum accusantium pariatur voluptatibus earum error.',
//       },
//       // }
//     // ] getNotes(),
//     ]
//   };

//   render() {
//     return (
//       <div class="container-fluid">
//         <div class="row justify-content-center title">
//           <div class="col-2 Nav">
//             <h4>Lambda Notes</h4>
//               <Button color="info" size="sm" block >View Your Notes</Button>{' '}
//               <Button color="info" size="sm" block>+ Create New Note</Button>{' '}
//           </div>
//           <div class="col-9 Main">
//             Your Notes:
//             <newNotes />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ViewNotes from './components/ViewNotes';
import DisplayOne from './components/DisplayOne';
import CreateNote from './components/CreateNote';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={ViewNotes} />
          <Route path="/create-new-note" component={CreateNote} />
          <Route path="/view-note/:id" component={DisplayOne} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;