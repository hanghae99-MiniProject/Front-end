import emptyHeart from '../../image/heart-regular.svg'
import fullHeart from '../../image/heart-solid.svg'
import { useState } from 'react'

export default function Heart(){
  const [liked, setLiked] = useState(false);

  const onClickHeart = () => {
    console.log('Heart Click')
    setLiked(!liked)
  }


  return <div>
    <img src={liked? fullHeart : emptyHeart} onClick={onClickHeart}style={{width:15}}/>
  </div>
}