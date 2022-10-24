import ReviewThumb from "../reviewthumb/ReviewThumb"
import { DivReviewListBox } from './style'

export default function ReviewList( { width, reviews } ){
  return <DivReviewListBox width={width}>
            {reviews.map(review => <ReviewThumb review={review} key={review.id}/>)}
        </DivReviewListBox>

}