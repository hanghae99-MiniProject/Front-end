import { DivThumbBox } from './style'
import commentIcon from '../../image/comment.svg'

export default function ReviewThumb( { review } ){
  return <DivThumbBox>
        <a href={`/detail/${review.reviewId}`}>
          <div className='posterWrap'>
            <img src={ review.image } />
          </div>
        </a>
        <div className='infoWrap'>
          <p>{ review.reviewTitle }</p>
          <p align="center"><span>❤ { review.heartNum || 0 }</span><span><img src={commentIcon} /> { review.commentNum }</span></p>
        </div>
      </DivThumbBox>
}