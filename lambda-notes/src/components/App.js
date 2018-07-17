import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Navigation from './Navigation';
import ListView from './ListView';
import {Route} from 'react-router-dom';
import CreateView from './CreateView';
import Note from './Note';
import EditView from './EditView';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {"tags": [""], "title": "Note Title 0", "textBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. Ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt porttitor sem, sit amet ultricies lacus pellentesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellentesque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, sollicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus id neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl."},
        {"tags": [""], "title": "Note Title 1", "textBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. Ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt porttitor sem, sit amet ultricies lacus pellentesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellentesque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, sollicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus id neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl."},
        {"tags": [""], "title": "Note Title 2", "textBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. Ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt porttitor sem, sit amet ultricies lacus pellentesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellentesque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, sollicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus id neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl."},
        {"tags": [""], "title": "Note Title 3", "textBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. Ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt porttitor sem, sit amet ultricies lacus pellentesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellentesque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, sollicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus id neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl."},
        {"tags": [""], "title": "Note Title 4", "textBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. Ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt porttitor sem, sit amet ultricies lacus pellentesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellentesque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, sollicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus id neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl."},
        {"tags": [""], "title": "Note Title 5", "textBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. Ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt porttitor sem, sit amet ultricies lacus pellentesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellentesque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, sollicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus id neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl."},
        {"tags": [""], "title": "Note Title 6", "textBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. Ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt porttitor sem, sit amet ultricies lacus pellentesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellentesque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, sollicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus id neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl."},
        {"tags": [""], "title": "Note Title 7", "textBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. Ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt porttitor sem, sit amet ultricies lacus pellentesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellentesque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, sollicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus id neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl."},
        {"tags": [""], "title": "Note Title 8", "textBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. Ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt porttitor sem, sit amet ultricies lacus pellentesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellentesque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, sollicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus id neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl."}


      ],
      note: {
        "tags": [""],
        "title": "",
        "textBody": ""
      },
      "title": "",
      "textBody": ""
    };
  }

  componentDidMount() {
    this.setState({notes: this.state.notes});
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = (e) => {
    console.log('submit');
    e.preventDefault();
    if(this.state.title === '' || this.state.textBody === '') return null;

    let notes = this.state.notes.splice();

    const note = {
      "tags": [""],
      "title": this.state.title,
      "textBody": this.state.textBody
    };

    notes.push(note);
    this.setData(notes);
    // this.props.submitReq(note);
    this.setState({
      "tags": [""],
      "title": "",
      "textBody": ""
    });
  };

  setData = (notes) => {
    this.setState({notes});
  };

  handleDelete = (id) => {
    // this.props.deleteReq(id);
  };

  handleUpdate = (id) => {
    // if(this.state.name === '' && this.state.age === '' && this.state.height === '') {
    //   return null;
    // }

    // const smurf = this.props.smurfs.filter((smurf) => smurf.id === id ? smurf : null);
    // // console.log(smurf);
    // const updatedSmurf = {
    //   name: this.state.name,
    //   age: Number(this.state.age),
    //   height: this.state.height
    // };

    // for(let key in updatedSmurf) {
    //   if(updatedSmurf[key] === '') {
    //     updatedSmurf[key] = smurf[0][key]
    //   }  
    // };
    
    // this.props.updateReq(id, updatedSmurf);
    // this.setState({
    //   name: '',
    //   age: '',
    //   height: ''
    // });
  };

  render() {
    return (
      <div className="App-container">
        <div className="App">
          <div style={{display: 'none'}}>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>

          <Navigation />
          <Route exact path="/" render={props => (
            <ListView {...props} notes={this.state.notes} />
          )} />
          <Route path="/create" render={props => (
            <CreateView {...props} title={this.state.title} textBody={this.state.textBody} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          )} />
          <Route path="/note" component={Note} />
          <Route path="/edit" component={EditView} />

        </div>
      </div>
    );
  }
}

export default App;
