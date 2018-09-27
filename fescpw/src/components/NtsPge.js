import React from 'react';
import styled from 'styled-components';
import img from '../assets/kobu-agency-651905-unsplash.jpg';

const NtsPgeCtnr = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-image: url(${img});
  background-size: 100% 100%;
`;

const NtsPgeCnt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

const NtsPgeHdr = styled.h1`
  margin-top: 15%;
  margin-left: 1%;
  font-family: "Planet Benson", Arial, sans-serif;
  font-size: 3.2rem;
  font-weight: normal;
`;

const NtsPgeSubHdr = styled.h4`
  margin-top: 3%;
  font-size: 1.6rem;
`;

const NtsPgeLnk = styled.a`
  margin-top: 3%;
  color: black;
  text-decoration: none;
`;

const NtsPge = () => {
  return (
    <NtsPgeCtnr>
      <NtsPgeCnt>
        <NtsPgeHdr>Lambda Notes</NtsPgeHdr>
        <NtsPgeSubHdr>Record knowledge.</NtsPgeSubHdr>
        <NtsPgeLnk href="/nts">Get started</NtsPgeLnk>
      </NtsPgeCnt>
    </NtsPgeCtnr>
  );
}

export default NtsPge;