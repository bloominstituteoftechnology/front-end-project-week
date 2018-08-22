import styled from 'styled-components'

export const Button = styled.button`
    background: ${props => props.delete ? 'red' : '#2AC0C4'};
    color: white;
    margin: ${props => props.submit ? '5px' : '1em'};
    padding: 0.25em 1em;
    border: 1px solid grey;
    font-size: 1em;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    width: ${props => props.submit ? '25%' : '75%'};
    height: 40px;
`

export const H1 = styled.h1`
    font-size: 2em;
    color: #4A494A;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    margin: 0.5em;
`

export const H2 = styled.h2`
    font-size: 1.5em;
    color: #4A494A;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    margin: 0.5em;
`

export const H3 = styled.h3`
    font-size: 1em;
    color: #4A494A;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    margin: 0.5em;
`

export const H4 = styled.h3`
    font-size: 1em;
    color: #4A494A;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
`

export const P = styled.p`
    font-family: 'Roboto', sans-serif;
`

export const UnderLinedP = P.extend`
    text-decoration: underline
    margin: 5px;
`

export const NoteItem = styled.div`
    border: 1px solid black;
    transition: 0.3s;
    width: 25%;
    padding: 10px;
    margin: 3px;
`

export const NoteTitle = styled.div`
    border-bottom: 2px solid #CDCDCD;
`

export const ListViews = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const TitleInput = styled.input`
    width: 75%;
    border-radius: 2px;
    border-color: #DEDDDE;
    background-color: #FFFEFF;
    padding: 5px;
    margin: 5px;
`

export const ContentInput = styled.textarea`
    wdith: 100%;
    border-radius: 2px;
    border-color: #DEDDDE;
    background-color: #FFFEFF;
    padding: 5px;
    margin: 5px;
    resize: none;
    outline: none;
`

export const TagInput = styled.input`
    widht: 100%;
    border-radius: 2px;
    border-color: #DEDDDE;
    padding: 5px;
    margin: 5px;
`

export const NoteOptions = styled.div`
    display: flex;
    justify-content: flex-end
`

export const SearchInput = styled.input`
    font-family: 'Roboto', sans-serif;
    height: 40px;
    width: 75%;
    font-size: 1em;
    padding: 0.25em 1em;
    margin: 1em;
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  
`

export const Tag = styled.p`
    padding: 5px;
    margin: 1em;
    font-size: 0.5em;
    font-family: 'Roboto', sans-serif;
    background: ${props => props.color};
    border-radius: 3px;
`

export const ListOptions = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    max-width: 900px;
`

