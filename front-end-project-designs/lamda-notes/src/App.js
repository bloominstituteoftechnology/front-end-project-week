import React, { Component } from "react"
import { Route } from "react-router-dom"

import CardsList from "./containers/CardsList"

class App extends Component {
  render() {
    return (
      <div>
        <h1>Lambda Notes</h1>
        <Route path="/" component={CardsList} />
      </div>
    )
  }
}

export default App
