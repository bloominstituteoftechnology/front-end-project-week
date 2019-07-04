import React from 'react';

import SearchBar from './SearchBar';

import { TopNavWrapper, DropdownWrapper, Dropdown, DropdownItemWrapper, DropdownItem, Ellipsis } from '../style';

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
      <TopNavWrapper>
        <SearchBar 
          filteredSearch={this.props.filteredSearch}
          handleSearchInput={this.props.handleSearchInput}
        />
       <DropdownWrapper>
         <Dropdown onClick={this.toggle}>Sort By <Ellipsis>...</Ellipsis></Dropdown>
         {this.state.dropdownOpen ? (
           <DropdownItemWrapper>
             <DropdownItem onClick={this.props.sortTitle}>Title</DropdownItem>
             <DropdownItem onClick={this.props.sortRecent}>Recent</DropdownItem>
           </DropdownItemWrapper>
          ) : ( null )
         }
       </DropdownWrapper>
      </TopNavWrapper>
    );
  }
}