import { DivRankSection } from './style'

export default function Rank(){

  return <DivRankSection>
    <img src='https://movie-phinf.pstatic.net/20220929_135/1664441921246ae2RC_JPEG/movie_image.jpg' />

    <div className='moveInfoWrap'>
      <h2>인생은 아름다워</h2>
      <hr />
      <span>★★★★★</span> <span>|</span> <span>Genre</span> <span>|</span> <span>2022.12.29</span>
      <hr />
      <div style={{height:20}}></div>
      <h3>Cast</h3>
      <span>류승룡</span>
      <span>염정아</span>
      <span>박세완</span>
      <span>옹성우</span>
    </div>
  
  </DivRankSection>
}