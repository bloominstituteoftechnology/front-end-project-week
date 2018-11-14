import React from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';

class EditNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      textBody: '',
      id: null
    }
  }
  componentDidMount() {
    axios.get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
         .then(res => {
           this.setState({
             title: res.data.title,
             textBody: res.data.textBody,
             id: res.data._id
           })
         })
  }

  inputHandler = (e) => {
    return this.setState({[e.target.name]: e.target.value});
}

update = (e) => {
  e.preventDefault();
  this.props.update({...this.state})

  this.setState({
    title: '',
    textBody: '',
    id: null
  })
}

  render () {
    return (
      <form onSubmit={this.update}>
        <h2>Edit Note:</h2>
        <input onChange={this.inputHandler}
               placeholder='Note Title'
               name='title'
               value={this.state.title}/>
        <textarea onChange={this.inputHandler}
                  placeholder='Note Content'
                  name='textBody'
                  value={this.state.textBody}/>
        <button type='submit' className='links'>Update</button>
      </form>
    )
  }
}

EditNote.propTypes = {
  update: PropTypes.func.isRequired
}


export default EditNote;
