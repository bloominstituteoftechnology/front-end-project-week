import React, { Component } from 'react';

import { Button, ButtonGroup } from 'reactstrap';

class CheckList extends Component {
  constructor (props) {
    super(props);

    this.state = { cSelected: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    return (
      <div>
        

        <h5>Checkbox Buttons</h5>
        <ButtonGroup>
          <Button color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>One</Button>
          <Button color="primary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Two</Button>
          <Button color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Three</Button>
        </ButtonGroup>
        <p>Selected: {JSON.stringify(this.state.cSelected)}</p>
      </div>
    );
  }
}


// class CheckList extends Component {
//     constructor(){
//         super();
//         this.state = {
//             list: [],
//             inputText: ''
//         }
//     }
//     componentDidUpdate(){
//         localStorage.setItem('list', JSON.stringify(this.state.list));
//       }

//     handleChange = event => {
//         event.preventDefault();
//         this.setState({
//         [event.target.name]: event.target.value
//     })
//     }

//     addItem = event => {
//         event.preventDefault()
//         this.setState({
//             list: [
//                 ...this.state.list, 
//                 { list: this.state.inputText }
//               ],
//               inputText: ''
//         })
//     }
//     render () {
//         return (
//             <div>
//                 <div>
//                     {this.state.list.map((item, index) => <div key={index}>
//                         {item}
//                     </div>)}
//                 </div>
//                  <form >
//                 <input
//                     type='text'
//                     name='inputText'
//                     placeholder='ADD NEW ITEM'
//                     value= {this.state.inputText}   //value attribute added so that the 'this.stae controls the data and not the input            
//                     onChange={this.handleChange} 
//                 />   
//                 <div className='btns'>
//                     <button onClick={this.addItem} className='add-btn'>Add Todo</button>   
//                     </div>    
//             </form> 
             
//             </div>
//         )
//     }
// }

export default CheckList