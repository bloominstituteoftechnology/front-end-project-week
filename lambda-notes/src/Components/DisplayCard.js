import React from 'react'; 
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

const Note = styled.div`
 display: flex;
 flex-direction: column;

  nav {
    align-self: flex-end;
    padding: 10px;
    width: 6%;
    display: flex;
    justify-content: space-between;
  }

  .delete {
    background: rgba(0,0,0,0.6);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .delete .prompt {
    display flex;
    justify-content: space-around;
    align-items: center;
    width: 500px;
    height: 200px;
    border: 2px solid black;
    background: rgba(255,255,255,1);
    margin-bottom: 350px;
  }

  .delete .prompt button{
    width: 40%;
    padding: 20px;
    background: light-grey;
  }
`

class DisplayCard extends React.Component  {

  state = {
    title: '',
    textBody: '',
  }
  
  componentDidMount() {
    this.setState({
      title: '',
      textBody: '',
    })
  }

  componentDidUpdate() {
    if(this.state.title === '' && this.props.content.length) {

      let note = this.props.content.find( note => note._id == this.props.match.params.id )
      this.setState({
        title: note.title,
        textBody: note.textBody,
      })
    }
  }
  

  render() {
    if(!this.props.content.length) {
      return <h1>loading...</h1>
    }  

    return (
      <Note>
        <nav>
          <NavLink className='navlink' to={`/note/${this.props.match.params.id}/edit`}>Edit</NavLink>
          <NavLink className='navlink' to={`/note/${this.props.match.params.id}/delete`}>Delete</NavLink>
        </nav>

        <Route path='/note/:id/delete' render={ props => {
          return (
            <div className={'delete'}>
              <div className={'prompt'}>
                <button onClick={() => {
                  this.props.deleteNote(this.props.match.params.id);
                  this.props.history.push('/');
                }
              }>Delete</button>
                <button onClick={() => props.history.push(`/note/${props.match.params.id}`)}>No</button>
              </div>
            </div>
          )
        }} />

        <h2>{this.state.title}</h2> 
        <p>{this.state.textBody}</p>
      </Note>
    )
  }
}

export default DisplayCard;