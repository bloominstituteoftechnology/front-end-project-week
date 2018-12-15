import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import NoteView from './views/NoteView';
import Sidebar from './components/Sidebar';
import Authenticate from './components/Authenticate';

// #region Styled Components
const AppWrapper = styled.div`
  display: flex;
  margin: auto 0;
`;
// #endregion Styled Components

class App extends React.Component {
  
  // #region Methods

  convertArrayOfObjectsToCSV = (args) => {
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
        return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
        ctr = 0;
        keys.forEach(function(key) {
            if (ctr > 0) result += columnDelimiter;

            result += item[key];
            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
  }

  downloadCSV = (args) => {
    var data, filename, link;

    var csv = this.convertArrayOfObjectsToCSV({
        data: this.props.notes
    });
    if (csv == null) return;

    filename = args.filename || 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
  }
  // #endregion Methods

  render() {
    return (
      <AppWrapper>
        <Route path="/" render={props => <Sidebar {...props} downloadCSV={this.downloadCSV} />} />
        <Route path="/" render={props => <NoteView {...props} /> } />
      </AppWrapper>
    );
  }
}

export default Authenticate(App);