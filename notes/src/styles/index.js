import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 900px;
  margin: 0 auto;
  color: #545454;
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
  }
`;

export const MainContent = styled.section`
  width: 75%;
  padding: 100px 5%;
  background: #f2f1f2;
  display: flex;
  flex-direction: column;
`;

export const NoteListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const NoteCardWrapper = styled.div`
  width: 30%;
  border: 1px solid #c2c2c2;
  padding: 10px;
  border-radius: 5px;
  height: 200px;
  background: #ffffff;
  margin: 20px 5px;
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    border-bottom: 2px solid #f2f2f2
    padding-bottom: 5px;
    margin: 10px 0;
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
  span {
    text-decoration: underline;
    font-weight: bold;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  input {
    border-radius: 5px;
    padding-left: 10px;
    height: ${props => (props.content ? "400px" : "40px")};
    width: ${props => (props.content ? "100%" : "50%")};
  }
`;

export const Button = styled.button`
  background: ${props => (props.delete ? "#CA2418" : "#36B9BD")};
  color: #ffffff;
  font-weight: bold;
  width: 200px;
  height: 40px;
  border-radius: 5px;
  font-size: 2rem;
  margin: 10px auto;
  cursor: pointer;
`;
