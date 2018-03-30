import React, { Component } from 'react';


import {SortableList} from './Sortables';
import {arrayMove} from 'react-sortable-hoc';


class NoteListTest extends Component {

    state = {
        notes: []
    };

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
          notes: arrayMove(this.state.notes, oldIndex, newIndex),
        });
    };

    componentDidMount() {
        this.setState({notes: this.props.notes});
    }
    
    render() {
        return (
            <div className='col-9 right_side'>
              <div className='row title_bar'>
                <div className='col-3 header_font'>
                  <h4>Your Notes:</h4>
                </div>
              </div>
              <div className='row'>
                <SortableList notes={this.state.notes} onSortEnd={this.onSortEnd} />
              </div>
            </div>
        )
    }
}
export default NoteListTest;
