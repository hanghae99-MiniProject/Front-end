import { useEffect } from 'react'
import { getReviewsThunk } from "../redux/modules/writeSlice";
import { useDispatch, useSelector } from "react-redux";

import ReviewList from "../components/reviewlist/ReviewList"
import Loading from "../components/loading/Loading";

export default function Review(){

  const dispatch = useDispatch();
  const { isLoading, error, searchMovies } = useSelector(state => state.writeSlice);

  useEffect(() => {
    dispatch(getReviewsThunk());
  }, [dispatch])

  if(isLoading || searchMovies.length <= 0)
    return <Loading />

  if(error)
    return <h1>Error</h1>

  return <ReviewList width='100%' reviews={searchMovies.data} />


}