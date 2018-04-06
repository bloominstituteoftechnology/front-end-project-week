import React from 'react';
import removeMd from 'remove-markdown';
import Shiitake from 'shiitake';
import LabelSelector from './LabelSelector';
import moment from 'moment';

class ListItem extends React.Component {
  state = {
    selectingLabel: false,
    selectorStyle: '',
  }

  toggleLabelSelection = () => {
    this.setState({ selectingLabel: !this.state.selectingLabel });
  }

  render() {
    let selectorStyle = {};
    switch (this.props.note.label) {
      case 'default':
        selectorStyle = {
          background: '#999999',
        }
        break;
      case 'red':
        selectorStyle = {
          background: '#D2001B',
        }
        break;
      case 'blue':
        selectorStyle = {
          background: '#00C0C2',
        }
        break;
      case 'tan':
        selectorStyle = {
          background: '#e7d39c',
        }
        break;
      case 'orange':
        selectorStyle = {
          background: '#ff9558',
        }
        break;
      case 'purple':
        selectorStyle = {
          background: '#101632',
        }
        break;
      default:
        selectorStyle = {
          background: '#999999',
        }
    }
    return (
      <li className='list-note-container'>
        <div className='label-selector' onClick={this.toggleLabelSelection}>{this.state.selectingLabel ? <LabelSelector note={this.props.note}/> : <div style={selectorStyle} className='label-selector-button'></div>}</div>
        <div className='list-note' onClick={() => { this.props.viewNote(this.props.note)} }>
          <div className='item-title'><Shiitake lines={1} throttleRate={200}>{this.props.note.title}</Shiitake></div>
          <Shiitake lines={6} throttleRate={200} className='item-entry'>{removeMd(this.props.note.entry)}</Shiitake>
          <div className='item-timestamp'>{moment(this.props.note.dateCreated).fromNow()}</div>
        </div>
      </li>
    );
  }
}


export default ListItem;