import axios from "axios"
import { useState, useEffect } from 'react'
import ReviewInfo from "../components/reviewinfo/ReviewInfo"
import { useCookies } from "react-cookie";
import Loading from "../components/loading/Loading";
import styled from "styled-components";
import { API_URL } from "../shared/Request";

export default function Main(){
  const [ review, setReview ] = useState();
  const [ cookie, setCookie, removeCookie ] = useCookies();
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    axios.defaults.headers.get['authorization'] = cookie.token;
    axios.defaults.headers.get['refresh-token'] = cookie.refreshtoken;
    axios.get(`${API_URL}/api/top-heart`)
    .then(res => {
      setReview(res.data)
      axios.get(`${API_URL}/api/reviews/${res.data}`)    
      .then(res => {
        if(res.data.success){
          setReview(res.data.data)
          setIsLoading(false)
        } else {
          alert(res.data.error.message)
        }
      })      
    })
  }, [])
  
  if(isLoading){
    return <Loading />
  } else {
    return <><DivTitle><h1>BEST REVIEW ✨</h1></DivTitle><ReviewInfo review={review}/></>
  }
}

const DivTitle = styled.div`
  min-width: 454px;
  max-width: 820px;
  width: 80vw;
  margin: auto;
`