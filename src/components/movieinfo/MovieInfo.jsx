import { DivMovieInfoSection } from './style'
import commentIcon from '../../image/comment.svg'

export default function MovieInfo({ movieInfo, children, isSmall=false }){

  const PERFECT_STAR = 5;
  const space = isSmall ? 0 : 15;

  return <DivMovieInfoSection isSmall={isSmall} star={((movieInfo.star / PERFECT_STAR) * 100)+'%'}>
    <img src={movieInfo.posterUrl} className='posterImg'/>
  
    <div className='moveInfoWrap'>
      <h2>{movieInfo.title}</h2>
      <h4>{movieInfo.genre}</h4>
      <hr />
      <span className='star'>★★★★★<span>★★★★★</span></span><span>|</span><span>❤ 1234</span> <span>|</span> <span><img src={commentIcon} className='iconImg' /> 123</span>
      <hr />
      <div style={{height:space}}></div>
      {isSmall ? <a></a> : <div className='children'>{children}</div>}
    </div>
  </DivMovieInfoSection>
}