import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Content, Create, Edit, Note, SideMenu } from './components'
import notes from './notes'

class App extends Component {
  state = {
    note: { id: null, text: '', title: '' },
    notes: []
  }

  componentDidMount() {
    this.setState({ notes })
  }

  handleFormChange = ({ target: { name, value } }) =>
    this.setState({ note: { ...this.state.note, [name]: value } })

  handleFormSubmit = id => {
    const { note, notes } = this.state
    this.setState({
      notes: [...notes, { ...note, id }],
      note: { id: null, title: '', text: '' }
    })
  }

  handleEdit = id => {
    let { note, notes } = this.state
    notes = notes.map(obj => obj.id === +id ? {...note, id: +id } : obj)
    this.setState({ notes, note: { id: null, title: '', text: '' } })
  }

  handleDelete = id => {
    let { notes } = this.state
    notes = notes.filter(obj => obj.id !== +id)
    this.setState({ notes })
  }

  Content = () => <Content notes={this.state.notes} />

  Note = ({ match: { params: { id } } }) => {
    const note = this.state.notes.find(note => note.id === +id)
    return <Note {...note} del={this.handleDelete} />
  }

  Create = props => {
    const id = this.state.notes.length
    return (
      <Create
        {...props}
        {...this.state.note}
        id={id}
        change={this.handleFormChange}
        submit={this.handleFormSubmit}
      />
    )
  }

  Edit = props => {
    const { id } = props.match.params
    return (
      <Edit
        {...props}
        {...this.state.note}
        id={id}
        change={this.handleFormChange}
        submit={this.handleEdit}
      />
    )
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <SideMenu />
          <div className="Content__container">
            <Route exact path="/" render={this.Content} />
            <Route path="/note/:id" render={this.Note} />
            <Route path="/create/" render={this.Create} />
            <Route path="/edit/:id/" render={this.Edit} />
          </div>
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App
