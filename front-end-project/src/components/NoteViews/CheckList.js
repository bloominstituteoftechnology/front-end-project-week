import React, { Component } from 'react'

class CheckList extends Component {
    state = {
        checklist: []
    }
    addChecklist= () => {
        const {checklist} = this.state
        this.setState({checklist: checklist.push(event.target.value)})
        event.target.value=''
    }
    

    render(){
        const {checklist} = this.state
        return(
            <div>
                <h2>CheckList</h2>
                <ul>
                    {checklist.map(check => <li>{check}</li>)}
                </ul>
                <input onChange={this.addChecklist}/>
            </div>
        )
    }
}

export default CheckList