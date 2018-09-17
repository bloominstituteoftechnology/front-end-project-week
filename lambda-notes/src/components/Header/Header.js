import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className={this.props.className}>
        <a className="App-header-logo">Lambda Notes</a> 
      </div>
    )
  }
}
 
export default Header;