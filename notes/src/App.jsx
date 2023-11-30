import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StyledContainer } from './styles';
import Sidebar from './components/Sidebar/Sidebar';
import List from './components/List/List';
import ViewNote from './components/ViewNote/ViewNote';
import CreateNote from './components/CreateNote/CreateNote';
import EditNote from './components/EditNote/EditNote';

const App = () => {
  return (
    <StyledContainer>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<List />} />
          <Route exact path="/note/:id" element={<ViewNote />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/note/:id/edit" element={<EditNote />} />
        </Routes>
      </BrowserRouter>
    </StyledContainer>
  );
};

export default App;
