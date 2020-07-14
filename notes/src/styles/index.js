import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 900px;
  margin: 0 auto;
  color: #545454;
  min-height: 100vh;
  h2 {
    font-size: 2rem;
  }
`;

export const NavBar = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 25%;
  background: #d3d2d3;
  h1 {
    font-size: 4rem;
    margin: 20px;
    color: #545454;
  }
  a {
    text-decoration: none;
  }
  a.active button {
    color: #36b9bd;
    background: #ffffff;
  }
`;

export const MainContent = styled.section`
  width: 75%;
  padding: 50px 10px;
  background: #f2f1f2;
  display: flex;
  flex-direction: column;
`;

export const ListHeading = styled.h2`
  margin-left: 20px;
  margin-bottom: 10px;
`;

export const NoteListWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export const NoteCardWrapper = styled.div`
  width: 30%;
  border: 1px solid #c2c2c2;
  padding: 5px 10px;
  border-radius: 5px;
  height: 200px;
  background: #ffffff;
  margin: 20px 0;
  cursor: pointer;
  h3 {
    font-size: 1.8rem;
    border-bottom: 2px solid #f2f2f2;
    padding-bottom: 5px;
    margin: 10px 0;
  }
  p {
    font-size: 1.4rem;
  }
  a {
    color: #545454;
    text-decoration: none;
  }
`;

export const NoteWrapper = styled.div`
  p {
    line-height: 18px;
    margin: 20px 0;
  }
`;

export const EditDelete = styled.div`
  position: relative;
  right: -80%;
  span {
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
    &:first-child {
      margin-right: 10px;
    }
    &:hover {
      text-decoration: none;
    }
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 20px;
`;

export const Cancel = styled.img`
  position: relative;
  right: -50%;
  cursor: pointer;
`;

export const Input = styled.textarea`
  border-radius: 5px;
  resize: ${props => (props.content ? "vertical" : "none")};
  font-size: 1.8rem;
  padding-left: 10px;
  margin: 10px 0;
  height: ${props => (props.content ? "400px" : "40px")};
  width: ${props => (props.content ? "100%" : "50%")};
`;

export const Button = styled.button`
  background: ${props => (props.delete ? "#CA2418" : "#36B9BD")};
  color: #ffffff;
  font-weight: bold;
  width: 200px;
  height: 40px;
  border-radius: 5px;
  font-size: 2rem;
  margin: 10px 0;
  cursor: pointer;
  &:hover {
    transition: all 0.4s ease 0s;
    background: ${props => (props.delete ? "#ffffff" : "#0E3A56")};
    color: ${props => (props.delete ? "#CA2418" : "#ffffff")};
    opacity: 0.8;
  }
`;

export const DeleteModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 500px;
  height: 200px;
  background: #fbfafb;
  button {
    margin: 0 20px;
  }
`;

export const Delete = styled.div`
  background: rgba(210, 210, 210, 0.8);
  height: 100vh;
  width: 200vw;
  justify-content: center;
  align-items: center;
  z-index: 111;
  position: fixed;
  top: 0;
  left: -50%;
`;

export const Dropdown = styled.div`
  position: absolute;
  background: #ffffff;
  z-index: 111;
  top: 5px;
  left: 600px;
  width: 300px;
  line-height: 24px;
  flex-direction: column;
  padding: 12px 0;
  border-radius: 5px;
  border: 1px solid #666;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.4rem;
    font-weight: 300;
    li {
      cursor: pointer;
      padding: 6px 30px 6px 20px;
      &:hover {
        background: #f2f2f2;
      }
    }
  }
`;

export const DropdownHeader = styled.h3`
  font-weight: 300;
  font-size: 1.5rem;
  padding: 0 30px 5px 20px;
`;

export const DropdownToggle = styled.img`
  cursor: pointer;
  position: absolute;
  left: 600px;
  top: -30px;
`;
export const SearchBar = styled.input`
padding-left: 10px;
font-size: 1.6rem;
border-radius: 3px;
border: none;
margin: 10px 0;
width: 200px
height: 40px`;

export const SpinnerWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginWrapper = styled.div`
  max-width: 512px;
  margin: 0px auto 28px auto;
  padding: 62.12px 99px 48px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  text-align: left;
  font-size: 1.8rem;
`;

export const LoginInput = styled.input`
  border-radius: 7px;
  color: #333333;
  border: 1px solid #e6e6e6;
  padding: 12px 16px;
  font-size: 1.8rem;
  width: 300px;
  height: 45px;
  margin: 5px 0;
`;

export const LoginButton = styled.button`
  height: 45px;
  font-size: 1.8rem;
  cursor: pointer;
  width: 300px;
  text-align: center;
  padding: 0 20px;
  margin-top: 5px;
  border-radius: 7px;
  background: #36b9bd;
  color: #fff;
  opacity: .9;
  &:hover {
    opacity: 1;
    transition: all 0.4s ease 0s;
  }
`;

export const LoginHeader = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin: 20px 0;
  color: 545454;
`;
