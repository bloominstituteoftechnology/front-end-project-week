import React from 'react';

class ListForm extends React.Component {
    constructor() {
        super();
        this.state = {
            listItem: '',
            checkList: []
        }
    }

    handleChange = (event) => {
        this.setState({listItem: event.target.value})
    }

    addItem = (e) => {
        e.preventDefault();
        let checkList = this.state.checkList.slice()
        checkList.push(this.state.listItem)
        this.setState({checkList: checkList})
        this.setState({listItem: ''})
        this.props.addToNote(this.state.checkList)
    }

    render() {
    return (
        <div>
            <ul>{console.log(this.state.checkList)}
                {this.state.checkList.map(item => {
                    return <li key={item}>{item}</li>
                })}
                </ul>
            <form onSubmit={this.addItem}>
                <input 
                    type='text'
                    placeholder='Add to list'
                    value={this.state.listItem}
                    onChange={this.handleChange}
                    />
                    <button>Add to list</button>
            </form>
        </div>
    )
}
}

export default ListForm;