import React, {Component} from 'react';
import Form from './Form'

class CreateView extends Component{
    constructor(){
        super()
        this.state={
            title:'',
            textBody: '',
            tags: []
        }
    }

    changeHandler = e =>{
        e.preventDefault()
    }
    render (){
        return <Form state={this.state} changeHandler={this.changeHandler}></Form>
    }
}


export default CreateView