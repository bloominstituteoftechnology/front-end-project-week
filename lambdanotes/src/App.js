import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
} from 'react-router-dom';
import './App.css';

class App extends Component {
  state = {
    lnotes: [
      {
        id: 1,
        title: 'Donec tincidunt!',
        message:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat magnam aspernatur beatae laudantium, optio harum accusantium pariatur voluptatibus earum error.',
      },
      {
        id: 2,
        title: 'Vehicula dui sed',
        message: 'Est excepturi iste praesentium sequi, sint explicabo iure?',
      },
      {
        id: 3,
        title: 'Suspendisse',
        message:
          'Eum recusandae debitis atque reprehenderit! Sint illo, ut beatae dolor impedit nulla delectus sequi, doloribus quia minus nobis, ducimus quos nemo alias? Numquam suscipit soluta ullam obcaecati vitae consequatur possimus fugit.',
      },
      {
        id: 4,
        title: 'Duis tristique enim',
        message:
          'Nam quis sollicitudin nisi, at suscipit est. Suspendisse neque lectus, luctus hendrerit quam ac, lobortis placerat lorem. Nulla facilisi. Aliquam iaculis placerat quam, nec porta ipsum. Duis porttitor vehicula magna fermentum lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras dignissim lorem mi, at pretium massa dignissim nec. Nam auctor tortor et tortor rhoncus, a aliquam sem mollis. Ut volutpat risus nibh, at fermentum dolor volutpat quis.',
      },
      {
        id: 5,
        title: 'Aenean euismod',
        message:
          'Fusce elementum commodo egestas. Sed venenatis ac sapien ac cursus. Nunc porttitor sit amet lectus sed commodo. Aliquam id lacus at nibh iaculis tempus. Sed faucibus vel felis sit amet luctus. Aliquam congue ...',
      },
      {
        id: 6,
        title: 'Nulla semper',
        message:
          'Nunc in turpis at eros placerat blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce tincidunt egestas consectetur. Duis erat tellus, viverra ut dapibus ut, ultricies ac neque. Aenean venenatis quam sit amet congue facilisis. Nulla a laoreet justo.',
      },
    ],
  };

  render() {
    return (
      <Router>
        <div className="LambdaNotes">
          <div className="App">
            <div className="sidebar">
              <h1 className="title">Lambda Notes</h1>
              <Link to="/" exact>
                <button className="button">View Your Notes</button>
              </Link>
              <Link to="/create">
                <button className="button">+ Create New Note</button>
              </Link>
            </div>
          </div>
          <div className="yournotes-header">Your Notes:</div>
          <ul className="notes">
            {this.state.lnotes.map(lnote => {
              return (
                <li key={lnote.id} className="list-notes">
                  <div className="note-title">{lnote.title}</div>
                  <div>
                    <hr width="100%" />
                  </div>
                  <div className="note-message">{lnote.message}</div>
                </li>
              );
            })}
          </ul>
          <Switch>
            {/* <Route path="/" component={Home} exact /> */}
            {/* <Route path="/" component={View} /> */}
            {/* <Route path="/create" component={Create} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
