import React, { Component } from 'react' ;
import axios from 'axios' ;
import '../src/App.css' ;
import {Route, NavLink} from 'react-router-dom' ;
import ListView from './components/Display_Components/ListView' ;
import CreateNewNote from './components/Display_Components/CreateNewNote' ;
import NoteView from './components/Display_Components/NoteView' ;
import EditView from './components/Display_Components/EditView' ;
import { AppWrap , BtnStyle, HeadStyle, LambdaNotes, NoteContent, NoteHeading } from '../src/components/Styles/AppStyle' ;





class App extends Component {

  state = {
    notes: {},
  }


    componentDidMount() {

      axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then( res => {
        this.setState({
          notes: res.data,
        })
      })
    }

  render() {

    return (
      <AppWrap>
        <NoteHeading><h2>List View</h2></NoteHeading>
        <NoteContent>
         <HeadStyle>
            <LambdaNotes>
              <h1>Lambda</h1>
              <h1> Notes</h1>
            </LambdaNotes>
            <NavLink exact to='/'>
                <BtnStyle> View your notes </BtnStyle>
            </NavLink>
            <NavLink to='/create'>
                <BtnStyle> + Create new note </BtnStyle>
            </NavLink>
          </HeadStyle>
        
            <Route path='/' exact 
              render={ props => <ListView />}
            />
            <Route path='/create' exact
            render={props => <CreateNewNote />}
            />

            <Route path={`/note/:id`} exact
              render={(props) => <NoteView  {...props} />}
            />

            <Route path={`/note/edit/:id`} exact
              render={(props) => <EditView notes={this.state.notes} {...props} />}
            />
        </NoteContent>
      </AppWrap>
    );
  }
}

export default App;
