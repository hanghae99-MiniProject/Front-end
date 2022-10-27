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
import Loading from '../loading/Loading'; // ADD
import Comment from '../comment/Comment';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const DetailInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.writeSlice); // ADD
  const [cookie, setCookie, removeCookie] = useCookies();

  const searchMovies = useSelector(
    (state) => state?.writeSlice?.searchMovies.data
  );

  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedReview, setUpdatedReview] = useState({
    reviewTitle: '',
    reviewContent: '',
  });

  //input, textarea 입력값 변경
  const onChangeComment = (event) => {
    const { name, value } = event.target;
    setUpdatedReview({ ...updatedReview, [name]: value });
  };

  //수정버튼
  const onSaveButtonHandler = () => {
    dispatch(
      updateMoviesWriteThunk({
        // ...searchMovies,
        reviewId: searchMovies.reviewId,
        reviewTitle: updatedReview.reviewTitle,
        reviewContent: updatedReview.reviewContent,
        authorization: cookie.token,
        refreshtoken: cookie.refreshtoken,
      })
    );
    setIsEditMode(false);
    navigate('/review');
  };
  //삭제버튼
  const onDeleteHandler = () => {
    dispatch(
      deleteMoviesWriteThunk({
        reviewId: id,
        authorization: cookie.token,
        refreshtoken: cookie.refreshtoken,
      })
    );
  };

  //useEffect
  useEffect(() => {
    dispatch(
      getMoviesWriteThunk({
        reviewId: id,
        authorization: cookie.token,
        refreshtoken: cookie.refreshtoken,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    setUpdatedReview({
      reviewTitle: searchMovies?.reviewTitle,
      reviewContent: searchMovies?.reviewContent,
    });
  }, [searchMovies]);
  
  if (isLoading || !searchMovies) {
    return <Loading />;
  }
  if (error) {
    alert(error);
    return <Loading />;
  }
  
  if(localStorage.getItem('memberName') !== searchMovies.memberName) {
    return <>
     <DetailContainer>
      <MovieInfo movieInfo={searchMovies} isSmall={true} />
      <ReviewContainer>
        {isEditMode ? (
          <>
            <ReviewTitle>리뷰제목</ReviewTitle>
            <ReviewInputTitle
              name='reviewTitle'
              value={updatedReview.reviewTitle}
              onChange={onChangeComment}
            />
            <ReviewTitle>리뷰내용</ReviewTitle>
            <ReviewTextareaTitle
              name='reviewContent'
              maxLength={200}
              readonly
              value={updatedReview.reviewContent}
              onChange={onChangeComment}
            />
          </>
        ) : (
          <div>
            <ReviewTitle>리뷰제목</ReviewTitle>
            <ReviewContent>{searchMovies?.reviewTitle}</ReviewContent>
            <ReviewTitle>리뷰내용</ReviewTitle>
            <ReviewContent>{searchMovies?.reviewContent}</ReviewContent>
          </div>
        )}
      </ReviewContainer>
      <Comment
        reviewId={searchMovies.reviewId}
        commentList={searchMovies.commentResponseDtoList}
      />
    </DetailContainer>
    </>
  }
  
  return (
    <DetailContainer>
      <MovieInfo movieInfo={searchMovies} isSmall={true} />
      <ReviewContainer>
        {isEditMode ? (
          <>
            <ReviewTitle>리뷰제목</ReviewTitle>
            <ReviewInputTitle
              name='reviewTitle'
              value={updatedReview.reviewTitle}
              onChange={onChangeComment}
            />
            <ReviewTitle>리뷰내용</ReviewTitle>
            <ReviewTextareaTitle
              name='reviewContent'
              maxLength={200}
              readonly
              value={updatedReview.reviewContent}
              onChange={onChangeComment}
            />
          </>
        ) : (
          <div>
            <ReviewTitle>리뷰제목</ReviewTitle>
            <ReviewContent>{searchMovies?.reviewTitle}</ReviewContent>
            <ReviewTitle>리뷰내용</ReviewTitle>
            <ReviewContent>{searchMovies?.reviewContent}</ReviewContent>
          </div>
        )}
      </ReviewContainer>

      <div>
        {isEditMode ? (
          <ReviewButtonContainer>
            <ReviewButton size='large' onClick={onSaveButtonHandler}>
              저장
            </ReviewButton>
            <ReviewButton
              size='large'
              onClick={() => {
                setIsEditMode(false);
              }}
            >
              취소
            </ReviewButton>
          </ReviewButtonContainer>
        ) : (
          <ReviewButtonContainer>
            <ReviewButton
              size='large'
              onClick={() => {
                setIsEditMode(true);
              }}
            >
              수정
            </ReviewButton>
            <ReviewButton size='large' onClick={onDeleteHandler}>
              삭제
            </ReviewButton>
          </ReviewButtonContainer>
        )}
      </div>
      <Comment
        reviewId={searchMovies.reviewId}
        commentList={searchMovies.commentResponseDtoList}
      />
    </DetailContainer>
  );
};

export default DetailInfo;

const DetailContainer = styled.div`
  /* background-color: #0000b1; */

  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0;
  margin: 0;
`;

const ReviewContainer = styled.div`
  /* background-color: purple; */
  width: 800px;
  height: 500px;
  margin: 30px 0px 0px 30px;
`;

const ReviewTitle = styled.h3`
  font-weight: bold;
  padding: 0px 0px 10px 30px;
  border: 0px;
  border-bottom: 2px solid #6f6f6f;
`;

const ReviewContent = styled.div`
  height: 50px;

  padding: 10px 0px 10px 30px;

  font-weight: bold;
`;

const ReviewInputTitle = styled.input`
  width: 790px;
  height: 30px;
`;

const ReviewTextareaTitle = styled.textarea`
  width: 790px;
  height: 300px;

  white-space: pre-wrap;
  /* overflow-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap; */
`;

const ReviewButtonContainer = styled.div`
  width: 800px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReviewButton = styled.button`
  width: 150px;
  height: 30px;
  margin: 10px;

  background-color: transparent;
  color: white;
  font-weight: bold;
  border: 3px solid #6f6f6f;
  border-radius: 10px;
  :hover {
    background-color: rgba(255, 255, 255, 0.305);
  }
`;
