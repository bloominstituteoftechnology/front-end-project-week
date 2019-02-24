import styled from "styled-components"

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  height: 100%;
  background-color: #d7d7d7;
  position: fixed;
  top: 0;
  left: 0;

  a {
    background-color: #2ac0c4;
    color: white;
    padding: 12px 0;
    margin-bottom: 15px;
    margin-left: 2%;
    text-decoration: none;
    font-size: 1.5rem;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
    width: 85%;
  }

  h1 {
    font-size: 3.8rem;
    margin-left: 6.5%;
    margin-top: 18px;
    line-height: 31px;
  }
`
