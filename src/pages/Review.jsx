import ReviewList from "../components/reviewlist/ReviewList"
import axios from "axios"
import { useEffect, useState } from 'react'
import Loading from "../components/loading/Loading";

export default function Review(){
  const [ reviews, setReviews ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  
  useEffect(() => {
    axios.get('http://43.201.55.251:8080/api/reviews') 
    .then(res => {
      if(res.data.success) {
        console.log(res.data)
        setReviews(res.data.data) 
        setIsLoading(false)
      }
    })
  }, [])
  
  console.log(reviews)
  if(isLoading){
    return <Loading />
  } else {
    return <ReviewList width='100%' reviews={reviews} />
  }

}