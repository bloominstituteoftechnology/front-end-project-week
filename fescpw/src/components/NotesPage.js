import React from 'react';
import styled from 'styled-components';
import img from '../assets/kobu-agency-651905-unsplash.jpg';

const NotesPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-image: url(${img});
  background-size: 100% 100%;
`;

const NotesPageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

const NotesPageHeader = styled.h1`
  margin-top: 15%;
  margin-left: 1%;
  font-family: "Planet Benson", Arial, sans-serif;
  font-size: 3.2rem;
  font-weight: normal;
`;

const NotesPageSubheader = styled.h4`
  margin-top: 3%;
  font-size: 1.6rem;
`;

const NotesPageLink = styled.a`
  margin-top: 3%;
  color: black;
  text-decoration: none;
  font-size: 1.4rem;
`;

const NotesPageButton = styled.button`
  margin-top: 3%;
  color: black;
  text-decoration: none;
  background-color: Transparent;
  border: none;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 0;
  }
`;

const NotesPage = () => {
  function logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("expires_at");
    window.location.reload();
  }
  return (
    <NotesPageContainer>
      <NotesPageContent>
        <NotesPageHeader>Lambda Notes</NotesPageHeader>
        <NotesPageSubheader>Record knowledge.</NotesPageSubheader>
        <NotesPageLink href="/notes">Get started</NotesPageLink>
        <NotesPageButton onClick={function() { logout(); }}>Logout</NotesPageButton>
      </NotesPageContent>
    </NotesPageContainer>
  );
}

export default NotesPage;