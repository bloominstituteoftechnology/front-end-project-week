import React from 'react'; 

class DisplayCard extends React.Component  {

  state = {
    title: '',
    textBody: '',
  }
  
  componentDidMount() {
    this.setState({
      title: '',
      textBody: '',
    })
  }

  componentDidUpdate() {
    // console.log('this is working?', this.state)
    if(this.state.title === '' && this.props.content.length) {
      console.log('showing this', this.props.content)
      let note = this.props.content.find( note => note._id == this.props.match.params.id )
      this.setState({
        title: note.title,
        textBody: note.textBody,
      })
    }
  }
  

  render() {
    if(!this.props.content.length) {
      return <h1>loading...</h1>
    }  

    return (
      <div className={'note'}>
        <h3>{this.state.title}</h3> 
        <hr/>
        <p>{this.state.textBody}</p>
      </div>
    )
  }
}

export default DisplayCard;