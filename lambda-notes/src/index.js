import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';



// const App = () => {
//     <div style={style}>
//         <Route exact path="/" component={CreateNote} />
//     </div>
// }

ReactDOM.render(
<Router>   
    <App />
</Router>,
document.getElementById('root'));
registerServiceWorker();
