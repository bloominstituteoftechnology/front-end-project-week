import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Notes from "./components/Notes";

ReactDOM.render(
    <Router>
        <Switch>
         <Route exact path="/"
            render={() => <div>HOME page here</div>}
        />

        <Route exact path="/add"
            render={() => <div>ADD notes here</div>}
        />

        <Route exact path="/notes"
            render={() => (
						<div>
							<Notes notes={this.state.notes} />
						</div>
					)}
        />
        </Switch>
    </Router>, document.getElementById('root'),);
