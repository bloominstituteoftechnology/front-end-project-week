import React from 'react'; 

class CreateNoteForm extends React.Component {
  state = {
    title: '',
    textBody: '',
  }

  componentDidMount() {
    console.log('checking for cdm',this.props)
    if(this.props.match.path === '/edit/:id' && this.props.content.length > 0){
      let note = this.props.content.find( note => note._id == this.props.match.params.id)
      
      this.setState({
        title: note.title,
        textBody: note.textBody,
      })
    }

  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }


  componentDidUpdate() {
    console.log('from cdu',this.state.title,this.props.content)
    if(this.props.match.path === '/edit/:id' && this.state.title === '' && this.props.content.length > 0) {
      let note = this.props.content.find( note => note._id == this.props.match.params.id)
      if(note.title === undefined) return;
      this.setState({
        title: note.title,
        textBody: note.textBody,
      })
    }
  }

  render() {

    if(this.props.match.path === '/edit/:id') {
      console.log('here in mathc')
      return (
        <div className={'create-note'}>
  
          <form 
            className={'create-note'}
            onSubmit={ e => {
              e.preventDefault()
              this.props.editNote(this.props.match.params.id, this.state)
              this.setState({
                title: '',
                textBody: '',
              })
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