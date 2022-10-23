import { DivThumbBox } from './style'
import commentIcon from '../../image/comment.svg'

export default function ReviewThumb( { review } ){

  return <DivThumbBox>
        <a href='#'>
          <div className='posterWrap'>
            <img src={ review.posterURL } />
          </div>
        </a>
        <div className='infoWrap'>
          <p>{ review.reviewTitle }</p>
          <p align="center"><span>❤ { review.heartCount }</span><span><img src={commentIcon} /> { review.commentCount }</span></p>
        </div>
      </DivThumbBox>
}