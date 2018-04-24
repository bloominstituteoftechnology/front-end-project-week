import React, { Component } from 'react';
import './App.css';
import Sidebar from './component/Sidebar'
import NoteList from './component/NoteList';
import AddNote from './component/AddNotes';
import NoteView from './component/NoteView';
import EditNote from './component/EditNote';
import DeleteNote from './component/DeleteNote';
import { Route } from 'react-router-dom';
import { Row, Container } from 'reactstrap';


export default class App extends Component {
  state = {
    notes: [
      {
        id: 0,
        title: "Note Title",
        content: 'Lorem ipsum dolor amet ullamco proident street art cardigan vegan chillwave offal artisan truffaut lyft single-origin coffee pinterest. Meh poutine narwhal, 3 wolf moon yuccie gochujang synth sed +1 whatever fixie chia hella. Heirloom sustainable neutra la croix VHS, meggings retro ugh kinfolk live-edge offal in. Paleo godard polaroid deserunt lorem ennui. Heirloom fugiat nulla hella blog +1. Actually authentic la croix duis artisan occaecat elit.'
      },
      {
        id: 1,
        title: "Note Title",
        content: 'Lorem ipsum dolor amet ullamco proident street art cardigan vegan chillwave offal artisan truffaut lyft single-origin coffee pinterest. Meh poutine narwhal, 3 wolf moon yuccie gochujang synth sed +1 whatever fixie chia hella. Heirloom sustainable neutra la croix VHS, meggings retro ugh kinfolk live-edge offal in. Paleo godard polaroid deserunt lorem ennui. Heirloom fugiat nulla hella blog +1. Actually authentic la croix duis artisan occaecat elit.'
      },
      {
        id: 2,
        title: "Note Title",
        content: 'Lorem ipsum dolor amet ullamco proident street art cardigan vegan chillwave offal artisan truffaut lyft single-origin coffee pinterest. Meh poutine narwhal, 3 wolf moon yuccie gochujang synth sed +1 whatever fixie chia hella. Heirloom sustainable neutra la croix VHS, meggings retro ugh kinfolk live-edge offal in. Paleo godard polaroid deserunt lorem ennui. Heirloom fugiat nulla hella blog +1. Actually authentic la croix duis artisan occaecat elit.'
      },
      {
        id: 3,
        title: "Note Title",
        content: 'Lorem ipsum dolor amet ullamco proident street art cardigan vegan chillwave offal artisan truffaut lyft single-origin coffee pinterest. Meh poutine narwhal, 3 wolf moon yuccie gochujang synth sed +1 whatever fixie chia hella. Heirloom sustainable neutra la croix VHS, meggings retro ugh kinfolk live-edge offal in. Paleo godard polaroid deserunt lorem ennui. Heirloom fugiat nulla hella blog +1. Actually authentic la croix duis artisan occaecat elit.'
      },
      {
        id: 4,
        title: "Note Title",
        content: 'Lorem ipsum dolor amet ullamco proident street art cardigan vegan chillwave offal artisan truffaut lyft single-origin coffee pinterest. Meh poutine narwhal, 3 wolf moon yuccie gochujang synth sed +1 whatever fixie chia hella. Heirloom sustainable neutra la croix VHS, meggings retro ugh kinfolk live-edge offal in. Paleo godard polaroid deserunt lorem ennui. Heirloom fugiat nulla hella blog +1. Actually authentic la croix duis artisan occaecat elit.'
      },
      {
        id: 5,
        title: "Note Title",
        content: 'Lorem ipsum dolor amet ullamco proident street art cardigan vegan chillwave offal artisan truffaut lyft single-origin coffee pinterest. Meh poutine narwhal, 3 wolf moon yuccie gochujang synth sed +1 whatever fixie chia hella. Heirloom sustainable neutra la croix VHS, meggings retro ugh kinfolk live-edge offal in. Paleo godard polaroid deserunt lorem ennui. Heirloom fugiat nulla hella blog +1. Actually authentic la croix duis artisan occaecat elit.'
      },
      {
        id: 6,
        title: "Note Title",
        content: 'Lorem ipsum dolor amet ullamco proident street art cardigan vegan chillwave offal artisan truffaut lyft single-origin coffee pinterest. Meh poutine narwhal, 3 wolf moon yuccie gochujang synth sed +1 whatever fixie chia hella. Heirloom sustainable neutra la croix VHS, meggings retro ugh kinfolk live-edge offal in. Paleo godard polaroid deserunt lorem ennui. Heirloom fugiat nulla hella blog +1. Actually authentic la croix duis artisan occaecat elit.'
      },
      {
        id: 7,
        title: "Note Title",
        content: 'Lorem ipsum dolor amet ullamco proident street art cardigan vegan chillwave offal artisan truffaut lyft single-origin coffee pinterest. Meh poutine narwhal, 3 wolf moon yuccie gochujang synth sed +1 whatever fixie chia hella. Heirloom sustainable neutra la croix VHS, meggings retro ugh kinfolk live-edge offal in. Paleo godard polaroid deserunt lorem ennui. Heirloom fugiat nulla hella blog +1. Actually authentic la croix duis artisan occaecat elit.'
      },
      {
        id: 8,
        title: "Note Title",
        content: 'Lorem ipsum dolor amet ullamco proident street art cardigan vegan chillwave offal artisan truffaut lyft single-origin coffee pinterest. Meh poutine narwhal, 3 wolf moon yuccie gochujang synth sed +1 whatever fixie chia hella. Heirloom sustainable neutra la croix VHS, meggings retro ugh kinfolk live-edge offal in. Paleo godard polaroid deserunt lorem ennui. Heirloom fugiat nulla hella blog +1. Actually authentic la croix duis artisan occaecat elit.'
      },
    ]
  }

  render() {
    return (
      <Container className="App">
        <Row>
          <Sidebar />
          <Route 
            exact path='/' 
            render={() => <NoteList notes={ this.state.notes }/> }/>
          <Route path='/add' component={ AddNote }/>
          <Route
            path='/notes/:id' component={ NoteView }/>
          <Route
            path='/notes/edit/:id' component={ EditNote }/>
        </Row>
      </Container>
    );
  }
}
