import styled from 'styled-components';

const NotesViewStyled = styled.div`
background-color: #F3F3F3;
display: flex;
height: 100%;
.LeftBar {
  background-color: #D7D7D7;
  padding: 15px;
  width: 180px;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 32px;
    font-weight: bold;
    color: #4A494A;
    margin: 0 0 5px 0;
  }
  button {
    background-color: #35C0C3;
    color: white;
    font-weight: bold;
    padding: 12px 0;
    margin: 5px 0;
  }
}

.MainView {
  padding: 20px;
  .header {
    height: 25px;
  }
  h2 {
    font-weight: bold;
    font-size: 18px;
    margin: 10px 0;
  }
}
`

export default NotesViewStyled;