import MovieInfo from '../movieinfo/MovieInfo'
import { A, P } from './style.js'

export default function ReviewInfo({ review }){
 
  const movieInfo = {
    image: review.image,
    movieTitle: review.movieTitle,
    rating: review.rating,
    genre: review.genre,
    heartNum: review.heartNum,
    commentNum: review.commentNum
  }
  console.log(review)
  return <MovieInfo movieInfo={movieInfo}>
    <h3>{review.reviewTitle}</h3>
    <P>{review.reviewContent}</P> 
    <A href={`/detail/${review.id}`}>더보기</A>
    </MovieInfo>
}