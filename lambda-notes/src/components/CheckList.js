import React, { Component } from 'react';
import {ChecklistWrapper, ChecklistForm, ChecklistContent} from '../style'
class CheckList extends Component {
    constructor(){
        super();
        this.state = {
            list: [],
            inputText: '',
            checked: false
        }
    }

    componentDidMount(){
        const storedItems = JSON.parse(localStorage.getItem('list'));
        // const storedItems1 = JSON.parse(localStorage.getItem('checked'));

        if (storedItems  ){
          this.setState({list: storedItems})
        } 
        // if (storedItems1 ){
        //     this.setState({checked: storedItems1})
        //   } 
      }
    
      componentDidUpdate(){
        localStorage.setItem('list', JSON.stringify(this.state.list));
        // localStorage.setItem('checked', JSON.stringify(this.state.checked));

      }

     
    handleChange = event => {
        event.preventDefault();
        this.setState({
        [event.target.name]: event.target.value
    })
    }

    handleClick = () => {
        this.setState({
            checked: !this.state.checked
        })
    }; 

    addItem = event => {
        event.preventDefault();
        if (this.state.inputText.length > 0){
          this.setState({
            inputText: '',
            list: [...this.state.list, this.state.inputText]
          });
        }
    }

    render () {
        return (
            <ChecklistWrapper>
                <h3>Checklist</h3>
             <div>
                    {this.state.list.map((item, index) => 
                    <ChecklistContent key={index}>
                        <input
                            type='checkbox'
                            onChange={() => this.handleClick}   
                        />
                        &nbsp;&nbsp;&nbsp;
                            <p>{item}</p>
                        
                       
                    </ChecklistContent>)}
                </div>
                 <ChecklistForm >
                <input
                    type='text'
                    name='inputText'
                    placeholder='ADD NEW ITEM'
                    value= {this.state.inputText}   //value attribute added so that the 'this.stae controls the data and not the input            
                    onChange={this.handleChange} 
                />   
                
                <div className='btns'>
                    <button onClick={this.addItem} className='add-btn'>Add Todo</button>   
                    </div>    
            </ChecklistForm> 
           
            
            </ChecklistWrapper>
        )
    }
}

export default CheckList