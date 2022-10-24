import { DivMovieInfoSection } from './style';

export default function MovieInfo({ movieInfo, isSmall = false }) {
  const PERFECT_STAR = 5;
  const space = isSmall ? 0 : 20;
  const keys = new Array(movieInfo.cast.length)
    .fill(1)
    .map((key, index) => (key = index + 1));

  return (
    <DivMovieInfoSection
      isSmall={isSmall}
      star={(movieInfo.star / PERFECT_STAR) * 100}
    >
      <img src={movieInfo.posterUrl} />

      <div className='moveInfoWrap'>
        <h2>{movieInfo.title}</h2>
        <hr />
        <span className='star'>
          ★★★★★<span>★★★★★</span>
        </span>{' '}
        <span>|</span>
        <span>{movieInfo.genre}</span> <span>|</span>
        <span>{movieInfo.releaseDate}</span>
        <hr />
        <div style={{ height: space }}></div>
        <h3>Cast</h3>
        {movieInfo.cast.map((actorName, index) => (
          <span key={keys[index]}>{actorName}</span>
        ))}
      </div>
    </DivMovieInfoSection>
  );
}
