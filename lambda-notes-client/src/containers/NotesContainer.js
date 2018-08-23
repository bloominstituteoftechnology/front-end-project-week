import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from "react-emotion";

import Note from '../components/notes/Note';
import SearchNotes from '../components/search/SearchNotes';
import searchBar from '../searchBar.js';


const Container = styled("div")`
  margin-left: 25%;
  min-height: 100vh;
  width: 75%;
  padding: 75px 35px 80px;

  .body-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35px;
    h2 {
      font-size: 2.7rem;
      font-weight: bold;
      color: #4A494A;
    }
    .img-container {
      width: 30px;
      height: 30px;
      img {
        width: 100%;
        height: auto;
        &:hover {
          cursor: pointer;
        }
      }
    }

    .search {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      span {
        font-size: 2.3rem;
        font-weight: bold;
        color: red;
        text-shadow: .5px .5px .5px rgba(255, 0, 0, .3);
        margin-left: 10px;
        
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  .no-posts {
    font-size: 2.7rem;
    font-weight: bold;
    color: #4A494A;
    text-align: center;
    margin-top: 100px;
  }
`;

const Main = styled("main")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;


class NotesContainer extends Component {

  state = {
    searchToggle: true,
    searchNotes: ''
  }

  handleOnChange = e => this.setState({[e.target.name]: e.target.value});

  handleSearchToggle = () => {
    this.setState(prevState => {
      return { searchToggle: !prevState.searchToggle }
    })
  }

  render() {

    let filteredPosts = this.props.notes.filter(note => {
      return (
        note.title.toLocaleLowerCase().includes(this.state.searchNotes.toLocaleLowerCase()) ||
        note.description.toLocaleLowerCase().includes(this.state.searchNotes.toLocaleLowerCase())
      );
    });

    return (
      <Container>

        <header className="body-header">
          <h2>Your Notes:</h2>

          {/*Search toggle*/}
          {this.state.searchToggle ?
            <div className="img-container">
              <img onClick={this.handleSearchToggle} src={searchBar} alt="search" />
            </div>
            :
            <div className="search">
              <SearchNotes handleOnChange={this.handleOnChange} searchNotes={this.state.searchNotes} />
              <span onClick={this.handleSearchToggle}>X</span>
            </div>
          }
        </header>
        
        {/*Handles no posts*/}
        {filteredPosts.length === 0 ?
          <div className="no-posts">No Notes!</div>
          :
          <Main>
            {
              filteredPosts.map((item, index) => <Note
                key={index}
                id={item.id}
                title={item.title}
                description={item.description}
                deleteNote={this.deleteNote}
              />)
            }
          </Main>
        }
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes
})

export default connect(mapStateToProps, {})(NotesContainer);
