import React from 'react';
import { ClipLoader } from 'react-spinners';
import { LoginWrapper } from '../ReusableComponents/Loading';

const Loading = props => {
  return (
    <LoginWrapper>
      <h1>{props.message}</h1>
      <ClipLoader />
    </LoginWrapper>
  );
};

export default Loading;
