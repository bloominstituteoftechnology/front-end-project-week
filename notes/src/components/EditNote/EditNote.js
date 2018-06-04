import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editNote } from '../../actions';


const mapStateToProps = state => {
    return {
        notesArray: state
    }
}

class EditNote extends Component {
    constructor() {
        super();
        this.state = {
            matched: []
        }
    }

    componentWillMount() {
        let routeId = this.props.match.params.id;
        let matched = this.props.notesArray.filter((item) => item._id === routeId);
        this.setState( { matched });
    }

    handleUpdate = () => {
        this.props.editNote(this.state.matched[0])
        this.props.history.push('/')
    }

    handleChange = e => {
        let copyArray = Array.from(this.state.matched);
        copyArray[0][e.target.name] = e.target.value;
        this.setState({ matched: copyArray })
    }

  render() {
      return (
          <div>
              <div className='content-header'>
                  <h2>Edit Note:</h2>
              </div>
              <div className='form'>
              <input className='title-input'
                  type='text'
                  name='title'
                  placeholder='Note Title'
                  value={this.state.matched[0].title}
                  onChange={this.handleChange}
              />
              <textarea className='content-input'
                  type='text'
                  name='body'
                  placeholder='Note Content'
                  value={this.state.matched[0].body}
                  onChange={this.handleChange}
              />
              <button className='btn form-btn'
                onClick={this.handleUpdate}
                >
                Update
              </button>
              </div>
          </div>
      );
  }
}

export default connect(mapStateToProps, { editNote })(EditNote);