import ReviewThumb from "../reviewthumb/ReviewThumb"
import { DivReviewListBox } from './style'
import ButtonWrite from "../buttonwrite/ButtonWrite"

export default function ReviewList( { width, reviews } ){
  console.log(reviews)
  return <DivReviewListBox width={width}>
            {reviews.map(review => <ReviewThumb review={review} key={review.reviewId}/>)}
            <ButtonWrite />
        </DivReviewListBox>

}