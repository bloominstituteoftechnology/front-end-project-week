import React, { Component } from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import { Button, ButtonGroup } from 'reactstrap';



class CheckList extends Component {
    constructor(){
        super();
        this.state = {
            list: [],
            inputText: ''
        }
    }
    componentDidUpdate(){
        localStorage.setItem('list', JSON.stringify(this.state.list));
      }

    handleChange = event => {
        event.preventDefault();
        this.setState({
        [event.target.name]: event.target.value
    })
    }

    addItem = event => {
        event.preventDefault()
        this.setState({
            list: [
                ...this.state.list, 
                { list: this.state.inputText }
              ],
              inputText: '[]'
        })
    }
    render () {
        return (
            <div>
                <div>
                    {this.state.list.map((item, index) => <div key={index}>
                        {item}
                    </div>)}
                </div>
                 <form >
                <input
                    type='type'
                    name='inputText'
                    placeholder='ADD NEW ITEM'
                    value= {this.state.inputText}   //value attribute added so that the 'this.stae controls the data and not the input            
                    onChange={this.handleChange} 
                />   
                
                <div className='btns'>
                    <button onClick={this.addItem} className='add-btn'>Add Todo</button>   
                    </div>    
            </form> 
           
             
            </div>
        )
    }
}

export default CheckList