import React,{ Component } from 'react';

export const NotesContext = React.createContext();

// export const NotesConsumer = ({render}) => {
//   return (
//     <NotesContext.Consumer>
//       {context => render(context)}
//     </NotesContext.Consumer>
//   )
// }

export class NotesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <NotesContext.Provider value="this is a value">
        {this.props.children}
      </NotesContext.Provider>
    );
  }
}
 
// export { NotesProvider };