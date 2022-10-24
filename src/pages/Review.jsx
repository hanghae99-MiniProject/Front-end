import ReviewList from "../components/reviewlist/ReviewList"
import axios from "axios"
import { useEffect, useState } from 'react'

export default function Review(){
  const [ reviews, setReviews ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  
  useEffect(() => {
    axios.get('http://week3-board.herokuapp.com/review') 
    .then(res => {
      setReviews(res.data) 
      setIsLoading(false)
    })
  }, [])
  
  console.log(reviews)
  if(isLoading){
    return <h1>LOADING</h1>
  } else {
    return <ReviewList width='100%' reviews={reviews} />
  }

}