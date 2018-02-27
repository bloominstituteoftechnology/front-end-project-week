import styled from "styled-components";

const NotesViewStyled = styled.div`
  background-color: #f3f3f3;
  display: flex;
  height: 100%;
  .LeftBar {
    background-color: #d7d7d7;
    padding: 15px;
    width: 180px;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 32px;
      font-weight: bold;
      color: #4a494a;
      margin: 0 0 5px 0;
    }
    button {
      background-color: #35c0c3;
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
      color: #4a494a;
      font-size: 18px;
      margin: 10px 0;
    }
  }

  .CreateView {
    padding: 20px;
    display: flex;
    flex-direction: column;
    .header {
      height: 25px;
    }
    h2 {
      font-weight: bold;
      color: #4a494a;
      font-size: 18px;
      margin: 10px 0;
    }
    form {
      display: flex;
      flex-direction: column;
      width: 500px;
      input {
        padding: 4px 10px;
        width: 50%;
        height: 26px;
        min-width: 100px;
        margin: 8px 0;
      }
      textarea {
        padding: 10px;
        width: 100%;
        margin: 5px 8px 5px 0;
      }
      button {
        background-color: #35c0c3;
        font-weight: bold;
        color: white;
        padding: 12px 25px;
        margin: 5px 0;
        width: 150px;
      }
    }
  }
`;

export default NotesViewStyled;
