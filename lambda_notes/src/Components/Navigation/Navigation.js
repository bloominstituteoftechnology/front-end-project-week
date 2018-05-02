import React, { Component } from 'react';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    this.setState({ notes: this.props.notes });
  }

  logout() {
    localStorage.clear();
  }

  render() {
    return (
      <div className="navDiv">
        <h2>Lambda Notes</h2>
        <Nav vertical>
          <Link to="/list" className="addNavLinks homeLink">
            View Your Notes
          </Link>

          <Link to="/add" className="addNavLinks">
            + Create New Note
          </Link>

          <Link
            to="/"
            className="addNavLinks csvBtn"
            // onClick={this.downloadCSV()}
          >
            Download CSV
          </Link>

          <Link to="/" className="addNavLinks" onClick={this.logout}>
            Log Out
          </Link>
        </Nav>
      </div>
    );
  }
}

export default Navigation;

// convertArrayOfObjectsToCSV(args) {
//   var result, ctr, keys, columnDelimiter, lineDelimiter, data;

//   data = args.data || null;
//   if (data == null || !data.length) {
//     return null;
//   }

//   columnDelimiter = args.columnDelimiter || ',';
//   lineDelimiter = args.lineDelimiter || '\n';

//   keys = Object.keys(data[0]);

//   result = '';
//   result += keys.join(columnDelimiter);
//   result += lineDelimiter;

//   data.forEach(function(item) {
//     ctr = 0;
//     keys.forEach(function(key) {
//       if (ctr > 0) result += columnDelimiter;

//       result += item[key];
//       ctr++;
//     });
//     result += lineDelimiter;
//   });

//   return result;
// }

// downloadCSV() {
//   let data;
//   let filename = 'export.csv';
//   let link;
//   let csv = this.convertArrayOfObjectsToCSV({
//     data: this.state.notes
//   });
//   if (csv == null) return;

//   // filename = args.filename || 'export.csv';

//   if (!csv.match(/^data:text\/csv/i)) {
//     csv = 'data:text/csv;charset=utf-8,' + csv;
//   }
//   data = encodeURI(csv);

//   // link = document.createElement('a');
//   link = document.getElementsByClassName('csvBtn');
//   link.setAttribute('href', data);
//   link.setAttribute('download', filename);
//   link.click();
// }
