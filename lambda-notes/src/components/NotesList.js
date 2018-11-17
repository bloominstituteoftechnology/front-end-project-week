import React, { Component } from 'react';
import Note from './Note.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListView = styled.div`
    margin-top: 50px;
    width: 80%;
`

const NotesView = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
const ViewTitle = styled.div`
    font-size: 24px;
    font-weight: bolder;
    margin-left: 23px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover {
        text-decoration: underline;
    }
`

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
`

const StyledInput = styled.input`
    height: 20px;
    border-radius: 5px;
    border: solid 1px lightgray;
    padding-left: 3px;
    outline: none;
`

const SortButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
`

const SortButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 25px;
    border: solid 1px black;
    border-radius: 3px;
`

class NotesList extends Component   {
    constructor(props)  {
        super(props);
        this.state = {
            notes: [],
            inputValue: "",
        }
    }

    onInputChange = ({ target })  =>  {
        this.setState((state)   =>  ({
            notes: this.props.notes.filter((note)   =>  {
                return note.title.toLowerCase().includes(target.value.toLowerCase()) || note.textBody.toLowerCase().includes(target.value.toLowerCase())
            }),
            inputValue: target.value
        }))
    }

    componentDidMount() {
        this.setState((state)   =>  ({
            notes: this.props.notes,
        }))
    }

    componentWillReceiveProps(newProps) {
        this.setState((state)   =>  ({
            notes: newProps.notes,
        }))
    }

    onSortHandler = ({ target })  =>  {
        let newState = []
        switch (target.id)   {
            case "0":
                newState = this.state.notes.sort((a,b)    =>  {
                    let id1 = a["_id"],
                        id2 = b["_id"],
                        comparison = 0;
                    id1 > id2 ? comparison = 1 : comparison = -1;
                    return comparison;
                })
                this.setState((state)    =>  ({
                    notes: newState,
                }))
                break;
            case "1":
                newState = this.state.notes.sort((a,b)    =>  {
                    let id1 = a["_id"],
                        id2 = b["_id"],
                        comparison = 0;
                        id1 < id2 ? comparison = 1 : comparison = -1;
                        return comparison;
                })
                this.setState((state)    =>  ({
                notes: newState,
            }))
            break;
            case "2":
            newState = this.state.notes.sort((a,b)    =>  {
                let title1 = a.title.toLowerCase(),
                    title2 = b.title.toLowerCase(),
                    comparison = 0;
                title1 > title2 ? comparison = 1 : comparison = -1;
                return comparison;
            })
            this.setState((state)    =>  ({
                notes: newState,
            }))
            break;
            case "3":
            newState = this.state.notes.sort((a,b)    =>  {
                let title1 = a.title.toLowerCase(),
                    title2 = b.title.toLowerCase(),
                    comparison = 0;
                title1 < title2 ? comparison = 1 : comparison = -1;
                return comparison;
            })
            this.setState((state)    =>  ({
                notes: newState,
            }))
            break;
            default:
                return this.state;
        }
    }



    render()    {
        return(
            <ListView>
                <ViewTitle>
                    Your Notes:
                </ViewTitle>
                <SortButtonContainer>
                    <SortButton id="0" onClick={this.onSortHandler} name="dateUp">Date ^</SortButton><SortButton id="1" onClick={this.onSortHandler} name={"dateDown"}>Date v</SortButton><SortButton id="2" onClick={this.onSortHandler} name={"titleUp"}>Title ^</SortButton><SortButton id="3" onClick={this.onSortHandler} name={"titleDown"}>Title v</SortButton>
                </SortButtonContainer>
                <InputContainer>
                    <StyledInput onChange={this.onInputChange} placeholder={"Search..."} value={this.state.inputValue}></StyledInput>
                </InputContainer>
                <NotesView>
                    {this.state.notes.map((note, index)  =>  {
                        return <StyledLink to={`/note/${note["_id"]}`} data={note} key={index}><Note key={index} note={note}/></StyledLink>
                    })}
                </NotesView>
            </ListView>
        );
    }
}

export default NotesList;
