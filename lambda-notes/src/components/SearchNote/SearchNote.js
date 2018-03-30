import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';

import './SearchNote.css';
import '../components.css';

class SearchNote extends Component {
  constructor() {
    super();
    this.state = {
      inputSearch: '',
      title: '',
      text: '',
      id: null,
      searched: false,
    }
  }
  
  componentDidMount() {
    
  }
  
  searchResults = event => {
    event.preventDefault();
    
  }
  
  searchInNotes = event => {
    console.log(this.props.notes);
    
    let search = this.props.notes.forEach((note, i) => {
      const textToArray = note.text.split(' ');
      console.log(textToArray);
      console.log(event.target.value);
      return textToArray.filter(word => {
        word.toLowerCase().indexOf(event.target.value) > -1
      });
    });
    
    console.log(search);
    
  
    // this.setState({
    //   text: search,
    //   searched: !this.state.searched,
    // })
    
  }
  
  render() {
    
    return(
      
      
      <div className="mainContainer">

        <div className="container">
          <div className="leftSide">
            <div className='h1'>Lambda<br/>Notes</div>
            <Link to={`/`}>
              <button className="buttons">View Your Notes</button>
            </Link>
            <Link to={`/create`}>
              <button className="buttons">+ Create New Note</button>
            </Link>
          </div>

          <div className="rightSide">
            <br/>
            <div className="listTitle">Search In Notes:</div>
            <br/>
            <div>
              <Form onSubmit={this.searchResults}>
                <InputGroup>
                  <Input
                    type="text"
                    name="search"
                    onChange={this.searchInNotes}
                    // value={this.state.inputSearch}
                  />
                  <InputGroupAddon type="submit" addonType="append"><Button>Search</Button></InputGroupAddon>
                </InputGroup>
              </Form>
            </div>

            <div style={ this.state.searched ? {display: 'block'} : {display: 'none'} }>
              this is the test
              {/* {this.state.text} */}
            </div>

          </div>
        </div>

      </div>
      
      
    )
    
  }
    
}


const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProps, )(SearchNote) 