import React, { Component } from 'react' ;
import '../src/App.css' ;
import { connect } from 'react-redux';
import { getNotes } from '../src/components/Actions/index';
import { Route, NavLink, withRouter } from 'react-router-dom' ;
import ListView from './components/Display_Components/ListView' ;
import CreateNewNote from './components/Display_Components/CreateNewNote' ;
import NoteView from './components/Display_Components/NoteView' ;
import EditView from './components/Display_Components/EditView' ;
import { AppWrap , BtnStyle, HeadStyle, LambdaNotes, NoteContent, NoteHeading } from '../src/components/Styles/AppStyle' ;





class App extends Component {

  state = {
    notes: [],
    path: 'List View',
  }


    componentDidMount() {

     this.props.getNotes();
    
    }

  render() {
    return (
      <AppWrap>
        <NoteHeading></NoteHeading>
        <NoteContent>
         <HeadStyle>
            <LambdaNotes>
              <h1>Lambda</h1>
              <h1> Notes</h1>
            </LambdaNotes>
            <NavLink  to='/'>
                <BtnStyle> View your notes </BtnStyle>
            </NavLink>
            <NavLink to='/create'>
                <BtnStyle> + Create new note </BtnStyle>
            </NavLink>
          </HeadStyle>
          
            <Route path='/' exact 
              render={ props => <ListView {...props} />}
            />

            <Route path='/create' exact
            render={props => <CreateNewNote />}
            />

            <Route path={`/note/:id`} exact
              render={ () => <NoteView  />}
            />

            <Route path={`/note/edit/:id`} exact
              render={(props) => <EditView  {...props} />}
            />
        </NoteContent>
      </AppWrap>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    notes: state.notes,
    path: state.path,
  }
}

export default withRouter(connect(mapStateToProps, { getNotes })(App));
