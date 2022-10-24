import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MovieInfo from '../components/movieinfo/MovieInfo';

import {
  deleteMoviesWriteThunk,
  getMoviesWriteThunk,
  updateMoviesWriteThunk,
} from '../redux/modules/writeSlice';

const Detail = () => {
  const { id } = useParams();
  
  const dispatch = useDispatch();

  const searchMovies = useSelector((state) => state.writeSlice.searchMovies);

  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedReview, setUpdatedReview] = useState({
    reviewTitle: '',
    reviewContent: '',
  });
  console.log(searchMovies);
  console.log(updatedReview);

  //input, textarea 입력값 변경
  const onChangeComment = (event) => {
    const { name, value } = event.target;
    setUpdatedReview({ ...updatedReview, [name]: value });
  };

  //수정버튼
  const onSaveButtonHandler = () => {
    dispatch(
      updateMoviesWriteThunk({
        reviewTitle: updatedReview,
        reviewContent: updatedReview,
      })
    );
    setIsEditMode(false);
    console.log(updateMoviesWriteThunk());
  };
  //삭제버튼
  const onDeleteHandler = () => {
    dispatch(deleteMoviesWriteThunk(id));
  };

  //useEffect
  useEffect(() => {
    dispatch(getMoviesWriteThunk(id));
  }, [dispatch, id]);

  useEffect(() => {
    setUpdatedReview({
      reviewTitle: searchMovies.reviewTitle,
      reviewContent: searchMovies.reviewContent,
    });
  }, [searchMovies]);

  return (
    <div>
      <MovieInfo movieInfo={searchMovies} isSmall={true} />
      <div style={{width:650, margin:'auto'}}>
        {isEditMode ? (
          <>
            리뷰제목:
            <input
              name='reviewTitle'
              value={updatedReview.reviewTitle}
              onChange={onChangeComment}
            />
            리뷰내용:
            <textarea
              name='reviewContent'
              rows='10'
              cols='50'
              maxLength={200}
              value={updatedReview.reviewContent}
              onChange={onChangeComment}
            />
          </>
        ) : (
          <div>
            리뷰제목:
            <div>{searchMovies.reviewTitle}</div>
            리뷰내용:
            <div>{searchMovies.reviewContent}</div>
          </div>
        )}
      </div>

      <div>
        {isEditMode ? (
          <div>
            <button size='large' onClick={onSaveButtonHandler}>
              저장
            </button>
            <button
              size='large'
              onClick={() => {
                setIsEditMode(false);
              }}
            >
              취소
            </button>
          </div>
        ) : (
          <div style={{textAlign:'center'}}>
            <button
              size='large'
              onClick={() => {
                setIsEditMode(true);
              }}
            >
              수정
            </button>
            <button size='large' onClick={onDeleteHandler}>
              삭제
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
