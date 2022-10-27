import { useEffect } from 'react'
import { getReviewsThunk } from "../redux/modules/writeSlice";
import { useDispatch, useSelector } from "react-redux";

import ReviewList from "../components/reviewlist/ReviewList"
import Loading from "../components/loading/Loading";
import ButtonWrite from "../components/buttonwrite/ButtonWrite"

import { useCookies } from 'react-cookie';

export default function Review(){

  const dispatch = useDispatch();
  const [ cookie, setCookie, removeCookie ] = useCookies();
  const { isLoading, error, searchMovies } = useSelector(state => state.writeSlice);
  

  useEffect(() => {
    dispatch(getReviewsThunk({'token':cookie.token, 'refresh-token':cookie.refreshtoken}));
  }, [dispatch])

  if(isLoading || searchMovies.length <= 0)
    return <Loading />

  // if(error)
    // return <h1>Error</h1>

  return <>
        <ReviewList width='100%' reviews={searchMovies.data} />
        <ButtonWrite />
      </>


}