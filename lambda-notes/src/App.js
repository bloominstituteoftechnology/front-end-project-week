import React, { Fragment } from 'react';

// import './App.css';
import TodoList from './components/TodoList';

// class App extends Component {
//   render() {
//     return (
//       <Fragment className="App">
//         <TodoList list={this.state.list} />
//       </Fragment>
//     );
//   }
// }

const App = props => {
  return (
    <Fragment className="App">
      <TodoList list={props.list} />
    </Fragment>
  )
}

export default App;
