import axios from "axios"
import { useState, useEffect } from 'react'
import ReviewInfo from "../components/reviewinfo/ReviewInfo"

export default function Main(){
  const TEST_ID = '2';
  const [ review, setReview ] = useState();
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    axios.get(`http://week3-board.herokuapp.com/review/${TEST_ID}`)
    .then(res => {
      setReview(res.data)
      setIsLoading(false)
      console.log('then')
    })
    console.log('useEffect')
  }, [])
  
  if(isLoading){
    {console.log('render-true')}
    return <h1>Loding</h1>
  } else {
    {console.log('render-false')}
    return <ReviewInfo review={review}/>
    
  }
  
}