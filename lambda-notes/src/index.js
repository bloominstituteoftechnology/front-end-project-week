import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            notes: [],
        }
    }

    componentDidMount() {
        this.setState({ notes: notes });
    }

    render() {
        return (
            <div className='App'>
                <div className='nav-bar'>
                    <Route path='/' component={ NavBar } />    
                </div>
                <div className='note-container'>
                    <Route exact path='/' render={ (props) => {
                        return (<ListView { ...props } notes={this.state.notes} />)}} />
                    <Route path='/create' component={CreateNote} />
                    <Route exact path='/:id' render={ (props) => {
                        return (<ListView {...props} notes={this.state.notes} />)}} />
                    <Route path='/note/edit' component={EditNote} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();