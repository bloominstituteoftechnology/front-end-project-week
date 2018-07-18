import React from 'react';
import { CheckListWrapper, CheckListContainer, MoreIcon } from '../ReusableComponents/Note';

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
        }
    }

    toggleCheckBox = () => {
        this.setState({ checked: !this.state.checked });
        localStorage.setItem('checked' + this.props.id, JSON.stringify(!this.state.checked));
    }

    render() {
        return (
            <CheckListWrapper>

                <CheckListContainer>
                    <input type='checkbox' checked={this.state.checked} onClick={this.toggleCheckBox} />
                    <span>{this.props.list.list}</span>
                </CheckListContainer>

                <MoreIcon onClick={() => this.props.deleteList(this.props.index)} src="https://png.icons8.com/metro/50/000000/more.png" alt='' />

            </CheckListWrapper>
        )
    }
}

export default NotesCheckList;