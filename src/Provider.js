import React, { Component } from "react";


const MyContext = React.createContext();

export class Provider extends Component {
  nextId = 9;
  noteId = 0;
  state = {
    notes: [
      {
        id: 0,
        title: "Note Title",
        body:
          "0 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 1,
        title: "Note Title",
        body:
          "1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 2,
        title: "Note Title",
        body:
          "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 3,
        title: "Note Title",
        body:
          "3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 4,
        title: "Note Title",
        body:
          "4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 5,
        title: "Note Title",
        body:
          "5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 6,
        title: "Note Title",
        body:
          "6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 7,
        title: "Note Title",
        body:
          "7 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 8,
        title: "Note Title",
        body:
          "8 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      }
    ],
    toggle: false,
    viewer: null
  };

  logIn = name => {
  	this.setState({ viewer: name });
  };

  logOut = () => this.setState({ viewer: null });

  render() {
  	return (
  		<MyContext.Provider 
  		value={{
  			viewer: this.state,
  			actions: {
  			logIn: this.logIn,
  			logOut: this.logOut,
  			},
  		}}>
  		{this.props.children}
  		</MyContext.Provider>
  	);
  }
}

export const Consumer = MyContext.Consumer;