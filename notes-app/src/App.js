import React, { Component } from 'react';
import './index.css';
import LeftNav from './Components/LeftNav/LeftNav';
import MainContent from './Components/MainContent/MainContent';


class App extends Component {
    render() {
        return (
            <div className="app_container">
            <div className="overlay"></div>
                <LeftNav />
                <MainContent />
            </div>
        )
    }
}

export default App; 




// import React, { Component } from 'react';
// import {Link, Route} from 'react-router-dom';
// import axios from 'axios';
// import './App.css';

// // import NoteView from './Components/NoteView';
// import AddNote from './Components/AddNote';
// import Notes from './Components/Notes';


// class App extends Component {
//   constructor(){
//     super()
//       this.state = {
//         notes: [],
//         tags: '',
//         title: '',
//         textBody: ''

//       };
//   }

//   componentDidMount() {
//     this.getNotes();
    
      
    
//   }

//   getNotes = () => {
//     axios
//     .get('https://killer-notes.herokuapp.com/note/get/all')
//     .then(response => {
//       this.setState(() => ({ notes: response.data }));
//     })
//     .catch(error => {
//       console.error('Server Error', error);
//     });
//   }

//   render() {
//     return (

//       <div className="App" >
//       <br /><br /><br />
//           Lambda Notes
//           <Link to="/"><button className="btn"> View Your Notes </button></Link>
//           <Link to="/AddNote"><button className="btn"> + Create New Note </button></Link>
//           <Route exact path="/" component ={Notes} />
//           <Route path="/AddNote" component={AddNote} />
//           <Route path={"/note/:id"} component={NoteView} />
        
//       </div>
//     );
//   }
// }

// // <Route path={"/note/:id"} component={NoteView}/> -> 
// // component={NoteView}/> -> render={() => }
         


// const NoteView = (match, props) => {
//     console.log("NoteView:", props)
//     return (
//     <div>
//       <br /><br /><br />
//         <div><h3>Title and Body of Unique ID:</h3>{match.match.params.id}</div>
//     </div>);
// }




// export default App;

/**
   <Route exact path={"/:id"} component={Child}/>
  <Route exact path={"/:id"} render={(props) => <Child {...props} state={this.state.notes}}/>


 */