import React from 'react';

class NotesCheckList extends React.Component {
    constructor() {
        super();

        this.state = {
            checked: false
        }
    }

    componentDidMount() {
        if (localStorage.getItem('checked' + this.props.id)) {
            this.setState({ checked: JSON.parse(localStorage.getItem('checked' + this.props.id)) });
        } else {
            localStorage.setItem('checked' + this.props.id, JSON.stringify(this.state.checked));
        }
    }

    toggleCheckBox = () => {
        this.setState({ checked: !this.state.checked });
        localStorage.setItem('checked' + this.props.id, JSON.stringify(!this.state.checked));
    }

    render() {
        return (
            <div className='checkbox-container'>

                <div className='checkbox-input-text'>
                    <input className='checkbox-input' type='checkbox' checked={this.state.checked} onClick={this.toggleCheckBox} />
                    <span>{this.props.list}</span>
                </div>

                <img onClick={() => this.props.deleteList(this.props.id)} className='more-icon' src="https://png.icons8.com/metro/50/000000/more.png" alt='' />

            </div>
        )
    }
}

export default NotesCheckList;