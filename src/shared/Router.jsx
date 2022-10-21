import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from '../pages/Detail';
import Main from '../pages/Main';
import Login from '../pages/Login';
import Mypage from '../pages/Mypage';
import Write from '../pages/Write';
import Review from '../pages/Review';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Detail/:postid' element={<Detail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Mypage/:id' element={<Mypage />} />
        <Route path='/Write' element={<Write />} />
        <Route path='/Review' element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
