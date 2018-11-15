import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NoteView = styled.div`
    padding-left: 25px;
    padding-right: 50px;
    width: 80%;
`;

const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
`

const StyledLink = styled(Link)`
    color: black;
    padding-left: 15px;
    font-weight: bolder;
`

class SingleNote extends Component  {
    constructor(props)  {
        super(props)
        this.state = {
            note: {}
        }
    }

    componentWillReceiveProps(newProps)  {
        newProps.notes.filter((note)  =>  {
            if(this.props.match.params.id === note["_id"])  {
                this.setState({
                    note: note,
                })
            }
        })
    }

    componentDidMount() {
        this.props.notes.filter((note)  =>  {
            if(this.props.match.params.id === note["_id"])  {
                this.setState({
                    note: note,
                })
            }
        })
    }

    render()    {
        return(
            <div>
                <Actions>
                    <StyledLink to={"/edit/:id"}>edit</StyledLink>
                    <StyledLink to={"/"}>delete</StyledLink>
                </Actions>
                <NoteView>
                    <h2>{this.state.note.title}</h2>
                    <div>{this.state.note.textBody}</div>
                </NoteView>
            </div>
        );
    }
}

export default SingleNote;
