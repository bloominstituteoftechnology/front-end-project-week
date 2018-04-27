Contents:
  (a) Trello 
  (b) Questions


(a) Trello
Trello URL: https://trello.com/b/Hrk9cf8X/front-end-board

(b) Questions
(1) How do I pass down a property when using <Route path='' component ={Component}?

  render method - check prior projects
  try to make the props part of url, and pass that down
  
  render() {
    // console.log(this.state)
    return (

      <div className="App">
      <Route path="/" component={Home}/>
      <div className="container-styles">    
          <Route exact path="/"
          render = {props =><Notes  notes={this.state.notes}/>}
      />
      <Route path ="/note/:id"
      render = {props =><NoteView  {...props} {...this.state.notes}/>}
    />
      </div>
      </div>
    );
  }


(2) how can i better organize my routes?

(3) persistent?
(4) difference b/n servers