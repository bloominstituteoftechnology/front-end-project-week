import React from 'react'; 

class CreateNoteForm extends React.Component {
  state = {
    title: '',
    textBody: '',
  }


  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    
    return (
      <div className={'create-note'}>

        <form 
          className={'create-note'}
          onSubmit={ e => {
            e.preventDefault()
            this.props.addNote(e, this.state)
            this.setState({
              title: '',
              textBody: '',
            })
            this.props.update();
            this.props.history.push('/');
          }}>

          <input 
            onChange={this.handleOnChange}
            className='title' 
            placeholder='Note Title' 
            name={'title'}
            value={this.state.title}
          />
  
          <input
            onChange={this.handleOnChange} 
            className='content'
            placeholder='Note Content' 
            name={'textBody'}
            value={this.state.textBody}
          />
          <button type='submit'>Save</button>

        </form>
      </div>
    )
  }
}

export default CreateNoteForm;