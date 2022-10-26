import axios from 'axios';
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import { API_URL } from '../../shared/Request';
import emptyHeart from '../../image/heart-regular.svg'
import fullHeart from '../../image/heart-solid.svg'
import { DivHeart } from './style';

export default function Heart({isLiked, reviewId, heartNum}){
  const navigate = useNavigate();
  const [ liked, setLike ] = useState(isLiked);
  const [ heartCount, setHeartCount ] = useState(heartNum)
  const [ cookie, setCookie, removeCookie ] = useCookies();

  const onClickHeart = () => {
    if(!cookie.token || !cookie.refreshtoken) {
      alert('로그인 해주세요.');
      navigate('/login');
    }

    axios.defaults.headers.post['authorization'] = cookie.token;
    axios.defaults.headers.post['refresh-token'] = cookie.refreshtoken;
    axios.post(`${API_URL}/api/review/${reviewId}/heart`)
    .then(res => {
      if(res.data){
        if(res.data.data){
          // Heart 누름
          setLike(true)
          setHeartCount(heartNum + 1)
        } else {
          //Heart 취소
          setLike(false)
          setHeartCount(heartNum)
        }
      } else {
        alert('좋아요에 실패했습니다.')
        window.location.reload();
      }
    })
  }

  return <DivHeart>
    <img src={liked? fullHeart : emptyHeart} onClick={onClickHeart}/> <div>{heartCount}</div>
  </DivHeart>
}