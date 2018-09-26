import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


/* Pagination Component 
-------------------------------------------------*/

const defaultProps = {
  initialPage: 1
}

class Paginations extends Component {
  constructor(props) {
      super(props);
      this.state = { pager: {} };
  }

  componentWillMount() {
      // set page if items array isn't empty
      if (this.props.items && this.props.items.length) {
          this.setPage(this.props.initialPage);
      }
  }

  componentDidUpdate(prevProps, prevState) {
      // reset page if items array has changed
      if (this.props.items !== prevProps.items) {
          this.setPage(this.props.initialPage);
      }
  }

  setPage(page) {
      let items = this.props.items;
      let pager = this.state.pager;

      if (page < 1 || page > pager.totalPages) {
          return;
      }

      // get new pager object for specified page
      pager = this.getPager(items.length, page);

      // get new page of items from items array
      let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

      // update state
      this.setState({ pager: pager });

      // call change page function in parent component
      this.props.onChangePage(pageOfItems);
  }

  getPager(totalItems, currentPage, pageSize) {
      // default to first page
      currentPage = currentPage || 1;

      // default page size is 10
      pageSize = pageSize || 9;

      // calculate total pages
      let totalPages = Math.ceil(totalItems / pageSize);

      let startPage, endPage;
      if (totalPages <= 10) {
          // less than 10 total pages so show all
          startPage = 1;
          endPage = totalPages;
      } else {
          // more than 10 total pages so calculate start and end pages
          if (currentPage <= 6) {
              startPage = 1;
              endPage = 10;
          } else if (currentPage + 4 >= totalPages) {
              startPage = totalPages - 9;
              endPage = totalPages;
          } else {
              startPage = currentPage - 5;
              endPage = currentPage + 4;
          }
      }

      // calculate start and end item indexes
      let startIndex = (currentPage - 1) * pageSize;
      let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

      // create an array of pages to ng-repeat in the pager control
      let pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

      // return object with all pager properties required by the view
      return {
          totalItems: totalItems,
          currentPage: currentPage,
          pageSize: pageSize,
          totalPages: totalPages,
          startPage: startPage,
          endPage: endPage,
          startIndex: startIndex,
          endIndex: endIndex,
          pages: pages
      };
  }

  render() {
      let pager = this.state.pager;

      if (!pager.pages || pager.pages.length <= 1) {
          // don't display pager if there is only 1 page
          return null;
      }

      return (
          <Pagination style={{ backgroundColor: '#333', borderColor: '#333', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
              <PaginationItem className={pager.currentPage === 1 ? 'disabled' : ''}>
                  <PaginationLink onClick={() => this.setPage(1)}>First</PaginationLink>
              </PaginationItem>
              <PaginationItem className={pager.currentPage === 1 ? 'disabled' : ''}>
                  <PaginationLink onClick={() => this.setPage(pager.currentPage - 1)}>Previous</PaginationLink>
              </PaginationItem>
              {pager.pages.map((page, index) =>
                  <PaginationItem key={index} className={pager.currentPage === page ? 'active' : ''}>
                      <PaginationLink onClick={() => this.setPage(page)}>{page}</PaginationLink>
                  </PaginationItem>
              )}
              <PaginationItem className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                  <PaginationLink onClick={() => this.setPage(pager.currentPage + 1)}>Next</PaginationLink>
              </PaginationItem>
              <PaginationItem className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                  <PaginationLink onClick={() => this.setPage(pager.totalPages)}>Last</PaginationLink>
              </PaginationItem>
          </Pagination>
      );
  }
}

Paginations.defaultProps = defaultProps;

export default Paginations;