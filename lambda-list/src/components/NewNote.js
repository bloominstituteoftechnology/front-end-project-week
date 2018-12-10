import React from 'react';
import '../App.css';

import { Link } from 'react-router-dom'
import '../App.css';
import styled from 'styled-components'
import NewNoteForm from './NewNoteForm'

const Page = styled.div`
  
  width: 100%;
  margin: 6% 3%;

  
 
`

const NewNote = props => {
    return (

        <Page>
            <div className="page-header">
            {/* This should also change when the page changes */}
                <h3>Create New Note:</h3>
                <NewNoteForm />
            </div>
        </Page>
        
    )
}

export default NewNote;



