import React, { Component } from 'react';
import { Button } from 'reactstrap';

const buttonStyles = {
  backgroundColor: '#2BC1C5',
  height: '29px',
};

export default class Search extends Component {
  state = {
    searchFor: '',
  };

  render() {
    return (
      <div>
        <input
          size="35"
          placeholder="Search For..."
          value={this.state.searchFor}
          onChange={this.searchChange}
        />
        {/* <Button
          className="ml-2"
          style={buttonStyles}
          onClick={e => {
            e.preventDefault();
            this.props.search(this.state.searchFor);
          }}
        >
          Search
        </Button> */}
        <Button
          className="ml-2"
          style={buttonStyles}
          onClick={e => {
            e.preventDefault();
            this.setState({ searchFor: '' });
            this.props.search('');
          }}
        >
          Reset
        </Button>
      </div>
    );
  }

  searchChange = event => {
    event.preventDefault();
    this.setState({ searchFor: event.target.value });

    this.props.search(event.target.value);
  };
}
