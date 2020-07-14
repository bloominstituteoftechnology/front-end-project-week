import React from 'react';
import SideBar from '../SideBar/SideBar';
import styled from 'styled-components';
import EditNoteForm from './EditNoteForm';

const ContentDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #F3F3F3;
`
const CreateContentDiv = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #F3F3F3;
`;
const CreateViewH1 = styled.h1`
    height: 20px;
    font-size: 25px;
    margin: 0px;
    padding: 50px;
    position: absolute;
    font-family: 'Open Sans', sans-serif;
    color: #4A4A4A;
    font-weight: bold;
`;

class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textInput: '',
        }
    }
    inputHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    submitHandler = (event) => {
        event.preventDefault();
        this.props.editNote(this.props.match.params.id,{ title: this.state.title, textBody: this.state.textInput });
        this.setState({
            title: '',
            textInput: '',
        })
        this.props.getNote(this.props.match.params.id)
    }

    render() {
        return (
            <ContentDiv>
                <SideBar handleLogout={this.props.handleLogout} handleClick={this.props.handleClick} />
                <CreateContentDiv>
                    <CreateViewH1>Edit Note: </CreateViewH1>
                    <EditNoteForm
                        inputHandler={this.inputHandler}
                        submitHandler={this.submitHandler}
                        title={this.state.title}
                        textInput={this.state.textInput}
                        addNotes={this.props.addNotes} 
                        id= {this.props.match.params.id}
                        {...this.props}
                        />
                </CreateContentDiv>
            </ContentDiv>
        )
    }
}

export default EditNote