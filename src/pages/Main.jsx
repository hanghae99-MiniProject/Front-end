import axios from "axios"
import { useState, useEffect } from 'react'
import ReviewInfo from "../components/reviewinfo/ReviewInfo"
import { useCookies } from "react-cookie";
import Loading from "../components/loading/Loading";
import styled from "styled-components";

export default function Main(){
  // const TEST_ID = '4';
  const [ cookie, setCookie, removeCookie ] = useCookies();
  const [ review, setReview ] = useState();
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    axios.get('http://43.201.55.251:8080/api/top-heart')
    .then(res => {
      setReview(res.data)
      axios.get(`http://43.201.55.251:8080/api/reviews/${res.data}`)    
      .then(res => {
        if(res.data.success){
          setReview(res.data.data)
          setIsLoading(false)
        }
      })      
    })    
  }, [])
  
  if(isLoading){
    {console.log('render-true')}
    return <Loading />
  } else {
    {console.log('render-false')}
    return <><DivTitle><h1>BEST REVIEW ✨</h1></DivTitle><ReviewInfo review={review}/></>
  }
}

const DivTitle = styled.div`
  min-width: 454px;
  max-width: 820px;
  width: 80vw;
  margin: auto;
`