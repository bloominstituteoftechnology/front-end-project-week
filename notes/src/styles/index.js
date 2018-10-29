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
  width: 20%;
  background: #d3d2d3 h1 {
    font-size: 3rem;
  }
`;

export const MainContent = styled.section`
  width: 80%;
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
  h3 {
    border-bottom: 1px solid #f2f1f2;
    padding: 5px;
    margin: 5px;
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
    font-weight: bold
}
`

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
`;
