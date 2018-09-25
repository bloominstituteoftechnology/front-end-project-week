import styled from 'styled-components';

export const Form = styled.div`
  margin: 50px 5%;

  h2 {
    margin-bottom: 20px;
  }
`

export const Input = styled.input`
  display: block;
  margin-bottom: 20px;
  padding: 10px 2%;
  width: 50%;
  border: 1px solid #D3D2D3;
  border-radius: 4px;
  font-size: 1.5rem;
`

export const Textarea = styled.textarea`
  display: block;
  font-family: sans-serif;
  height: 300px;
  padding: 15px 2%;
  border: 1px solid #D3D2D3;
  border-radius: 4px;
  width: 100%
  font-size: 1.6rem;
`

export const Button = styled.button`
  border: 1px solid  #D3D2D3;
  background: #24B8BD;
  color: white;
  margin-top: 20px;
  padding: 10px 10%;
  text-align: center
  font-weight: bold;
  font-size: 1.6rem;
`