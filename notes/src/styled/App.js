import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AppWrapper = styled.div`
  box-sizing: border-box;
  background-color: #f3f3f3;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
export const Nav = styled.nav`
  height: 100%;
  width: 250px;
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #d7d7d7;
  overflow-x: hidden;
  box-sizing: border-box;
  border-right: 1px solid grey;

  h1 {
    color: #4a494a;
    width: auto;
    font-size: 2.75rem;
    padding-top: 3%;
    margin: 0 auto;
    text-align: left;
    padding-left: 10%;
    margin-bottom: 10%;
  }
`;
export const Link = styled(NavLink)`
  color: #ffffff;
  width: 80%;
  height: 7%;
  margin: 0 auto;
  margin-bottom: 8%;
  background-color: #2ac0c4;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;

  &:hover {
    background-color: #ffffff;
    color: #2ac0c4;
  }
`;

export const WelcomeBanner = styled.h2`
  position: fixed;
  top: 5%;
  left: 40%;
`;
