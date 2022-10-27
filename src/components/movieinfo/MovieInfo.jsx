import { DivMovieInfoSection } from './style';
import commentIcon from '../../image/comment.svg';
import Heart from '../heart/Heart';

export default function MovieInfo({ movieInfo, children, isSmall = false }) {
  const PERFECT_RATING = 5;
  const space = isSmall ? 0 : 15;

  const posterClickHandler = () => {
    window.open(movieInfo?.image, movieInfo?.movieTitle, 'location = no, toolbars = no, status = no')
  }

  return (
    <DivMovieInfoSection
      isSmall={isSmall}
      star={(movieInfo?.rating / PERFECT_RATING) * 100 + '%'}
    >
      <img src={movieInfo?.image} className='posterImg' onClick={posterClickHandler}/>

      <div className='moveInfoWrap'>
        <h2>{movieInfo?.movieTitle}</h2>
        <h4>{movieInfo?.genre}</h4>
        <hr />
        <span className='star'>
          ★★★★★<span>★★★★★</span>
        </span>
        <span>|</span>
        <span><Heart isLiked={movieInfo.heartYn} reviewId={movieInfo.reviewId} heartNum={movieInfo?.heartNum}/></span> <span>|</span>
        <span>
          <img src={commentIcon} className='iconImg' /> {movieInfo?.commentNum}
        </span>
        <hr />
        <div style={{ height: space }}></div>
        {isSmall ? <a></a> : <div className='children'>{children}</div>}
      </div>
    </DivMovieInfoSection>
  );
}
