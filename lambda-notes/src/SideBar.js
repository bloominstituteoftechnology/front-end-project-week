import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {
    constructor(props) {
        super(props);
    }
    
    shouldComponentUpdate = (nextProps, nextState) => {
        return false;

        render = () => {
            return (
              <div className='side-bar'>
                <div>
                  <h1>Lambda Notes</h1>
                  <button><Link>View Notes</Link></button>
                  <button><Link>Add New Note</Link></button>
                </div>
              </div>
            );
        }
    }

}

