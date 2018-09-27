import React, { Component } from 'react';

import Pagination from './Pagination'

class PaginationContainer extends Component {

  state = {
    page: 0
  }

  handleAdd = (prevState) => {
    console.log('handle add firing');
    this.setState({ page: this.state.page += 1 })
    this.props.handlePagination(`page${Math.abs(((this.state.page+this.props.modulo)%this.props.modulo))}`)
  }

  handleSubstract = () => {
    this.setState({ page: this.state.page -= 1 })
    this.props.handlePagination(`page${Math.abs(((this.state.page+this.props.modulo)%this.props.modulo))}`)
  }


  render() {
    console.log('PG:', this.props.modulo);
      return(
        <Pagination
          handleAdd={this.handleAdd}
          handleSubstract={this.handleSubstract}
        />
      )
  }

}

export default PaginationContainer
