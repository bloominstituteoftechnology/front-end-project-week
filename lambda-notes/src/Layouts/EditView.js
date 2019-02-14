import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNote, updateNote } from '../actions/noteActions';
import { Link } from 'react-router-dom';


class EditView extends Component {
    state = {
      title: '',
      textBody: ''
    };
  
    componentWillReceiveProps(nextProps, nextState) {
      const { title, textBody } = nextProps.note;
      this.setState({
        title,
        textBody
      });
    }

    componentDidMount() {
      const {id} = this.props.match.params;
      this.props.getNote(id);
    }

    onSubmit = (e) => {
      e.preventDefault();
  
      const { title, textBody } = this.state;

      const { id } = this.props.match.params;

      const updateNote = {
        id,
        title,
        textBody
      };
      
      this.props.updateNote(updateNote);
     
      // Clear State
      this.setState({
        title: '',
        textBody: ''
      });
  
     this.props.history.push('/');
    };
  
    onChange = e => this.setState({ [e.target.name]: e.target.value });
  
    render() {
      const { title, textBody } = this.state;
    return (
      <div>
        <h2 className="mb-4" style={{marginLeft:'19.36rem', paddingTop: '2.5rem'}}> Edit Note:</h2>
        <form onSubmit ={ this.onSubmit }>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input 
                type="text"
                name="title"
                value={ title }
                className="form-control form-control-md"
                placeholder="Enter Title..."
                onChange={ this.onChange } 
            />
            </div>
            <textarea class="form-control for-control md" id="exampleFormControlTextarea1" value={ textBody } name="textBody" onChange={ this.onChange } placeholder="Enter Note..." rows="10"></textarea>
            <input type="submit" value="Update" className="btn btn-lg btn-primary" style={{marginTop: '10px', color:'#fff', padding:'370 30px'}} />
            <button className="btn btn-outline-primary btn-lg" style={{marginTop: '10px', marginLeft: '10px'}}><Link to="/">Cancel</Link></button>
        </form>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  note: state.note.note
});

export default connect (mapStateToProps, { getNote, updateNote })(EditView);