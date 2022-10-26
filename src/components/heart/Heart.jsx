import emptyHeart from '../../image/heart-regular.svg'
import fullHeart from '../../image/heart-solid.svg'
import { useState, useEffect } from 'react'
import { DivHeart } from './style';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { API_URL } from '../../shared/Request';

export default function Heart({isLiked, reviewId, heartNum}){
  const [ liked, setLike ] = useState(isLiked);
  const [ heartCount, setHeartCount ] = useState(heartNum)
  const [ cookie, setCookie, removeCookie ] = useCookies();

  const onClickHeart = () => {
    // 로그아웃 상태일 때 alert

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

      console.log(res.data)
      // setHeartCount(heartCount++)
    })
  }
  
  useEffect(() => {

  }, [liked])

  return <DivHeart>
    <img src={liked? fullHeart : emptyHeart} onClick={onClickHeart}/> <div>{heartCount}</div>
  </DivHeart>
}