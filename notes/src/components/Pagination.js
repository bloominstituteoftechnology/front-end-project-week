import React, { Component } from 'react';


class Pagination extends Component {

  render() {
      return(
        <div className='pagination-buttons'>
          <div
            className='substract'
            onClick={this.props.handleSubstract}
            > - </div>
          <div
            className='add'
            onClick={this.props.handleAdd}
            > + </div>
        </div>
      )
  }

}

export default Pagination
