import styled from "styled-components";

const NotesViewStyled = styled.div`
  background-color: #f3f3f3;
  display: flex;
  min-height: 800px;
  width: 100%;
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
      color: white;
      width: 175px;
      height: 40px;
      padding: 12px 0;
      margin: 5px 0;
      text-decoration: none;
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
    .Notes {
      margin: 0 0 0 -10px;
      display: flex;
      flex-wrap: wrap;
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
        box-sizing: border-box;
        resize: none;
        width: 500px;
        height: 400px;
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

  .OneNote {
    padding: 10px 20px;
    .header {
      width: 500px;
      display: flex;
      justify-content: flex-end;
      font-size: 12px;
      Link {
        margin: 5px;
      }
      a {
        margin: 5px;
      }
    }
    h2 {
      font-weight: bold;
      color: #4a494a;
      font-size: 18px;
      margin: 6px 0 6px 0;
      padding: 10px;
    }
    p {
      max-width: 500px;
      width: 100%;
      padding: 10px;
      font-size: 14px;
      white-space: pre-wrap;
    }
    .deleteModal {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 450px;
      height: 140px;
      background-color: white;
      border: 1px solid black;
      z-index: 3;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        text-align: center;
      }
      button {
        width: 150px;
        height: 35px;
        margin: 5px;
        padding: 5px 30px;
        font-weight: bold;
        border: 1px solid #f3f3f3;
      }
      .deleteButton {
        background-color: #ce0a24;
        color: white;
      }
      .noButton {
        background-color: #35c0c3;
        color: white;
      }
    }
    .background {
      position: absolute;
      width: 100%;
      height: 100%;
      margin: auto;
      background-color: white;
      opacity: 0.6;
      z-index: 2;
      top: 0;
      left: 0;
    }
  }
  
  .EditView {
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
        margin: 5px 8px 5px 0;
        width: 500px;
        height: 400px;
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
`;

export default NotesViewStyled;
