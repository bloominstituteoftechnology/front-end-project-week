import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import SearchBar from './SearchBar';

export default class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState( {
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className='topnav-wrapper'>
        <SearchBar 
          filteredSearch={this.props.filteredSearch}
          handleSearchInput={this.props.handleSearchInput}
        />
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret color='info'>
          Sort By <span>...</span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this.props.sortTitle}>Sort By Title</DropdownItem>
          <DropdownItem onClick={this.props.sortRecent}>Sort By Most Recent</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
    );
  }
}