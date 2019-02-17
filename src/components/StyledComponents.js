import styled from "styled-components";

export const H4 = styled.h3`
  font-size: 1em;
  color: #4a494a;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
`;
export const NoteItem = styled.div`
  background: #ffffff;
  border: 1px solid black;
  transition: 0.3s;
  width: 25%;
  padding: 10px;
  margin: 3px;
`;

export const NoteTitle = styled.div`
  border-bottom: 2px solid #cdcdcd;
`;
export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.p`
  padding: 5px;
  margin: 1em;
  font-size: 0.5em;
  font-family: "Roboto", sans-serif;
  background: ${props => props.color};
  border-radius: 3px;
`;
export const SearchInput = styled.input`
  font-family: "Roboto", sans-serif;
  height: 40px;
  width: 75%;
  font-size: 1em;
  padding: 0.25em 1em;
  margin: 1em;
`;
export const SidebarButton = styled.div`
  font-family: "Raleway", sans-serif;
  background: #2bc1c4;
  color: #ffffff;
  border: unset;
  border: solid #740078 0.5px;
  width: 80%;
  height: 30px;
  margin: 0 7.5% 15px;
  padding: 8px;
  justify-content: center;

  > p {
    color: white;
  }
  &:hover {
    background-color: #2c6666;
    cursor: pointer;
  }
`;

export const DivClick = styled.div`
  margin: 0 5% 15px 5%;
  text-align: center;
  padding: 8%;
  border: solid #005778 0.5px;
  background-color: #4aacac;
  > p {
    color: white;
  }
  &:hover {
    background-color: #2c6666;
    cursor: pointer;
  }
`;
export const Registerbutton = styled.div`
  font-family: "Raleway", sans-serif;
  background: #2bc1c4;
  color: #ffffff;
  border: unset;
  border: solid #740078 0.5px;
  width: 80%;
  height: 30px;
  margin: 0 7.5% 15px;
  padding: 8px;
  justify-content: center;
  }
  `;