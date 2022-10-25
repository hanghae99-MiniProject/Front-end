import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  deleteMoviesWriteThunk,
  getMoviesWriteThunk,
  updateMoviesWriteThunk,
} from '../../redux/modules/writeSlice';
import MovieInfo from '../movieinfo/MovieInfo';

const DetailInfo = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const searchMovies = useSelector((state) => state.writeSlice.searchMovies);
  console.log(searchMovies);
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
        ...searchMovies,
        reviewTitle: updatedReview.reviewTitle,
        reviewContent: updatedReview.reviewContent,
      })
    );
    setIsEditMode(false);
  };
  //삭제버튼
  const onDeleteHandler = () => {
    dispatch(deleteMoviesWriteThunk(id));
    console.log(id);
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
    <DetailContainer>
      <MovieInfo movieInfo={searchMovies} isSmall={true} />
      <ReviewContainer>
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
      </ReviewContainer>

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
          <div style={{ textAlign: 'center' }}>
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
    </DetailContainer>
  );
};

export default DetailInfo;

const DetailContainer = styled.div`
  background-color: blue;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
`;

const ReviewContainer = styled.div`
  background-color: purple;
  width: 600px;
  margin: 30px 0px 0px 30px;
`;
