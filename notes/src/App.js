import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NotesList from "./components/NotesList.js";

class App extends Component {
constructor(){
  super();
  this.state={
    notes:[
      {"tags": ["react", "redux"],
      "title": "React-Redux",
      "textBody": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",},
      {"tags": ["react"],
      "title:": "REACT IS THE BEST",
      "textBody": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
    },
      {"tags": ["redux"],
      "title": "REDUX IS THE BEST",
      "textBody": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    
    },
      {"tags":["react", "react-router"],
      "title":"Get Your Kicks on Route /66",
      "textBody": "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
    
    },
      {"tags":["redux","react", "smurfs"],
      "title":"Why So Many Projects With Smurfs?",
      "textBody":"The Smurfs was first created and introduced as a series of comic characters by the Belgian comics artist Peyo (the pen name of Pierre Culliford) in 1958, wherein they were known as Les Schtroumpfs."
    
    },
      {"tags":["redux", "react"],
      "title":"Infinite State Management of the Gods",
      "textBody": "We weren't being pompous ... We did come from the land of the ice and snow. We were guests of the Icelandic Government on a cultural mission. We were invited to play a concert in Reykjavik and the day before we arrived all the civil servants went on strike and the gig was going to be cancelled. The university prepared a concert hall for us and it was phenomenal. The response from the kids was remarkable and we had a great time. 'Immigrant Song' was about that trip and it was the opening track on the album that was intended to be incredibly different"
    }



    ]
  }
}

  render() {
    return (
      <div>
        <header>
        </header>
        <NotesList notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
