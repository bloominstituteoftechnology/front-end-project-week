import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Content, Create, Edit, Note, SideMenu } from './components'
import notes from './notes'

class App extends Component {
  state = {
    notes: [],
    note: { id: null, title: '', text: '' }
  }

  handleFormChange = ({ target: { name, value } }) =>
    this.setState({ note: { ...this.state.note, [name]: value } })

  handleFormSubmit = id => {
    const { notes, note } = this.state
    this.setState({
      notes: [...notes, { ...note, id }],
      note: { id: null, title: '', text: '' }
    })
  }

  handleEditSubmit = id => {
    let { note, notes } = this.state
    notes = notes.map(obj => obj.id === +id ? note : obj)
    this.setState({ notes, note: { id: null, title: '', text: '' } })
  }

  componentDidMount() {
    this.setState({ notes })
  }

  Content = () => <Content notes={this.state.notes} />

  Note = ({ match: { params: { id } } }) => {
    const note = this.state.notes.filter(note => note.id === +id)[0]
    return <Note {...note} />
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
        submit={this.handleEditSubmit}
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
