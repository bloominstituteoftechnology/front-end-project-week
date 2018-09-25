import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0 , 0.6)
`

export const ModalMain = styled.div`
  background: lightgray;
  position: fixed;
  top: 25%;
  left: 25%;
  width: 50%;
  height: auto;
  padding: 35px 5%;
  text-align: center;

  h5 {
    font-size: 1.7rem;
    padding: 5px 0;
  }
`

export const Button = styled.button`
  width: 45%;
  margin: 30px 2%;
  padding: 13px 2%;
  color: white;
  font-weight: bold;
  border: 1px solid #B8CACB;
`

export const DeleteButton = styled(Button)`
  background: #CA001A;
`

export const NoButton = styled(Button)`
  background: #24B8BD;
`