import React from 'react';

import Note from './Note'

class ListView extends React.Component {
    render() {
      return (
        <div className="listView">
         I'm the list view
         <Note />
        </div>
      );
    }
  }
  
  export default ListView;