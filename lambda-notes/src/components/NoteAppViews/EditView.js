import React, { Component } from 'react'
import { Button} from 'reactstrap'
import styled from 'styled-components'
const EditViewStyle = styled.div `
 display: flex;
 flex-direction: row;
 width: 75% ;
`
export default class EditView extends Component {
 // componentDidMount(){
 //  const id = this.props.match.params.noteId
 //  console.log(id)
 // }
  render() {
    return (
      <div>
      <EditViewStyle>
        <textarea 
      id="note"
      name="note"
      rows="10"
      cols="40"
      >

      </textarea>
       <Button color="success">Save Changes</Button>
      </EditViewStyle>
      </div>
    )
  }
}

