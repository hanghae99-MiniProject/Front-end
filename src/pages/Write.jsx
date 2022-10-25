import React from 'react';
import ReviewWrite from '../components/reviewWrite/ReviewWrite';

import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';

const Write = () => {
  const navigate = useNavigate();
  const [ cookie, setCookie, removeCookie ] = useCookies();
  const [ isSignin, setIsSignin ] = useState(false);

  useEffect(() => {
    if(!cookie.token){
      setIsSignin(false);
      navigate('/login');
    } else {
      setIsSignin(true);
    }
  }, [])

  if(isSignin) {
    return <ReviewWrite />;
  } else {
    return <h1> Loading </h1>
  }
};

export default Write;
