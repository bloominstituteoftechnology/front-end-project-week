import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  background: #f2f0f2;
  overflow-wrap: break-word;
  overflow-y: scroll;
  width: 100%;
`

export const InnerContainer = styled.div`
  flex-direction: column;
  display: flex;
  width: 500px;
  margin-top: 30px;
`

export const Title = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  margin: 0px 10px 20px;
`

export const Body = styled.p`
  margin: 10px;
  width: 500px;
  font-size: 1.6rem;
  line-height: 2.6rem;
  white-space: pre-wrap;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Button = styled.button`
  background: inherit;
  border: 0px;
  color: black;
  cursor: pointer;
  text-decoration: underline;
  font-size: 1.8rem;
`

export const DeleteModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: grey;
  opacity: 0.65;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DeleteBox = styled.div`
  padding: 30px;
  border: 1px solid black;
  background: white;
  font-size: 1.8rem;
`
export const DeleteButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const DeleteButton = styled.button`
  background: ${({ color }) => color};
  padding: 13px 30px;
  border: 0px;
  color: white;
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  margin: 20px 10px 0px;
`
