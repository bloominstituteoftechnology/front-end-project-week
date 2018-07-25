import React from 'react';
import AddNote from './AddNote';
import Options from './Options';
import Action from './Action';
// import Header from './header';
import OptionModal from './OptionModal'

export default class NotesApp
 extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  handleDeleteOptions = () => {
    // This is the shorthand version of the code below it
    this.setState(() => ({ options: []}));
    // ^^^ This code above is the same as below
   /* this.setState(() => {
      return {
        options: []
      };
    });
    */
  };
  // not to be confused with handleDeleteOption(S)
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    
    }))
  };
  handleEditOptions = () => {
    // This is the shorthand version of the code below it
    this.setState(() => ({ options: []}));
    // ^^^ This code above is the same as below
   /* this.setState(() => {
      return {
        options: []
      };
    });
    */
  };

  handleEditOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    
    }))
  };
  // this was used as a prop on the Action component/we also .bind(this) it up top
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    // didnt use prevState because we are overridng and dont care about what the original value was
    this.setState(() => ({ selectedOption: option}));
  };
  // Create new method handlePick pass down to Action and bind it up here^^^
  // will randomly pick an option and alert it

  handleAddNote = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > - 1) {
      return 'This note already exists';
    } 
    // This is the shorthand version of the code below it
    this.setState((prevState) => ({ options: prevState.options.concat(option)}));
    /*
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    })
    */
  };

  // Modal Prop
  handleModal = () => {
    this.setState(() => ({ selectedOption: undefined}));
  }

  //  lifecyccle methods only accessible in class components
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
    const options = JSON.parse(json);
    
    if (options) {
    this.setState(() => ({ options }));
      }
    } catch (events) {
      // do nothing at all if data is invalid
    }
  }
  // comes in handy when figuring out when your component did change
  componentDidUpdate (prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }


  render() {
    // Removed title becauase we set up a default in the Stateless Header component
      // const title = 'Indecision';
      const subtitle = '';
      return (
          <div>
          {/* This a prop almost like an ID this allows us to have things change for example if we wanted the header to change based on if we were on the home page or about page we'd make a prop in this case "title" is our prop and its holding the string "Test Value"
            <Header title='Test Value'/>  */}
            <div className="">
            <div>
           {/* <AddNote
             handleAddNote={this.handleAddNote}
           /> */}
            </div>
             {/* <Action hasOptions={this.state.options.length > 0}
              // We set this handle prop up with the method handlePick we then moved the prop to the Actions component to have access to it with "onClick={this.props.handlePick}" so when we clicked it would run the method we just made that allowed us to pick a random number
              handlePick={this.handlePick}
          />*/}

              <div className="widget">
                <Options 
                options ={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                handleEditOptions={this.handleEditOptions}
                handleEditOption={this.handleEditOption}
                />
                {/*<AddNote
                handleAddNote={this.handleAddNote}
                /> */}
              </div>

            </div>
            <OptionModal
            selectedOption={this.state.selectedOption}
            handleModal={this.handleModal}
            />
          </div>
      );
  }
}