import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const EditDeleteContainerStyledDiv = styled.div`
    display:flex;
    justify-content:flex-end;
    border: 0px solid red;
    padding-top:10px;
    padding-bottom:10px;
`
const EditDeleteStyledDiv = styled.div`
    font-size:14px;
    font-weight:bold;
    color:#4A4A4A;
`

const editDeleteTextStyle = {
    color:'#4A4A4A',
}

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note:{}
        };
    }

    componentDidMount() {
        // const id = this.props.match.match.params.id-1;
        // this.setState({note:this.props.noteEntries[id]})


        const id = this.props.match.match.params.id;

        // let note = this.props.noteEntries.filter(noteEntry => noteEntry.id ==id)
        // note = note[0]


        axios.get(`http://localhost:8000/api/noteEntries/${id}`)
            .then(res=> {
                console.log(res)
                this.setState({note:res.data[0]})
            })
            .catch(err=> {
                console.log(err)
            })
    }

    render() {
        return (
            <div style={{display:'flex',flexDirection:'column', border:'0px solid green',width:'100%'}}>
                <EditDeleteContainerStyledDiv>

                    <Link to={`/editNote/${this.state.note.id}`}  style ={editDeleteTextStyle} >
                        <EditDeleteStyledDiv style ={{paddingRight:'10px',font:'Roboto Bold'}}>
                            edit 
                        </EditDeleteStyledDiv>
                    </Link>

            
                    <Link to={`/`} style ={editDeleteTextStyle}>
                        <EditDeleteStyledDiv onClick={(e) => this.props.deleteNoteEntry(e, this.props.match.match.params.id)}>
                            delete
                        </EditDeleteStyledDiv>
                    </Link>
 
                </EditDeleteContainerStyledDiv>
                
                <div>
                    <h2 style = {{margin:'10px 0px 10px 0px', font:'Roboto Bold', fontSize:'24px', color:'#4A4A4A'}}>{this.state.note.title}</h2>
                   
                        <br />
                   {this.state.note.textBody}
                </div>
            </div>
        ) 
    }
}


export default Note