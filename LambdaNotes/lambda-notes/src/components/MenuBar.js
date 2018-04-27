// REACT COMPONENTS
import React, { Component } from "react";
import { CSVExporter } from './CSVExporter';

// REDUX COMPONENTS
import { connect } from 'react-redux';

// STYLING COMPONENTS
import '../Styles.css';

// ROUTING COMPONENTS
import { Link } from 'react-router-dom';

class MenuBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      notes: props.notes,
    }
  }

  render() {
    console.log('menu state', this.state.notes);
    return (
      <div className='APP__MENUBAR'>
        <h1>Lambda<br/>Notes</h1>
          <Link to="/"><button className="APP__MENUBUTTON">
            View Your Notes
          </button></Link>
          <Link to="/create"><button className="APP__MENUBUTTON">
            + Create New Note
          </button></Link>
          <button className="APP__MENUBUTTON"
            onClick={() => {
              CSVExporter(this.state.notes);
            }}>Download Notes</button>
      </div>
    );
  };
};



export default connect()(MenuBar);