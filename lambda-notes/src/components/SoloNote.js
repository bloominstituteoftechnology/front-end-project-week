import React from "react";
import styled from "styled-components";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'


const NoteCard = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  margin: 23px 14px 0 0;
  padding: 12px 15px 28px;
  border: 1px solid #afafaf;
  background: white;
  overflow: hidden;
  h5 {
    font-size: 18px;
    font-weight: bold;
    border-bottom: 1px solid #afafaf;
    word-wrap: break-word;
    padding-bottom: 10px;
  }
  p {
    margin: 10px 0 20px;
    line-height: 2;
    word-wrap: break-word;
    font-size: 12px;
    overflow: hidden;
    padding-bottom: 10px;
  }
`;

class SoloNote extends React.Component {

    render(){
        let currentNote = this.props.notes.filter(x => x._id === this.props.id)
        currentNote =currentNote[0]

        if (!currentNote){
            return <Redirect to='/'/>
        }

  return (


        <NoteCard>
          <h5>{currentNote.title}</h5>
          <p>{currentNote.textBody}</p>
          
        </NoteCard>
      


  );
};
}
const mapStateToProps = state =>({
    notes: state.notes
})

export default connect(mapStateToProps)(SoloNote);
