import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Login from '../pages/Login';
import Join from '../pages/Join';
import Review from '../pages/Review';
import Write from '../pages/Write';
import Detail from '../pages/Detail';



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/review' element={<Review />} />
        <Route path='/Write' element={<Write />} />
        <Route path='/detail/:id' element={<Detail />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
