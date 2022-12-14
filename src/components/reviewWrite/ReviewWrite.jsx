import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { addMoviesWriteThunk } from '../../redux/modules/writeSlice';
import Loading from '../loading/Loading';
import { useCookies } from 'react-cookie';
import { API_URL } from '../../shared/Request.jsx';

const ReviewWrite = () => {
  const [cookie, setCookie, removeCookie] = useCookies();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onClickHandler = (event) => {
    event.preventDefault();

    if (
      data.image.trim() === '' ||
      data.movieTitle.trim() === '' ||
      data.rating.trim() === '' ||
      data.genre.trim() === '' ||
      data.reviewTitle.trim() === '' ||
      data.reviewContent.trim() === ''
    ) {
      return alert('모든 항목을 입력해주세요.');
    }

    // dispatch(
    //   addMoviesWriteThunk({
    //     image: data.image,
    //     movieTitle: data.movieTitle,
    //     rating: data.rating,
    //     genre: data.genre,
    //     reviewTitle: data.reviewTitle,
    //     reviewContent: data.reviewContent,
    //     authorization: cookie.token,
    //     refreshtoken: cookie.refreshtoken,
    //   })
    // );
    setIsLoading(true);
    axios.defaults.headers.post['authorization'] = cookie.token;
    axios.defaults.headers.post['refresh-token'] = cookie.refreshtoken;
    axios
      .post(`${API_URL}/api/reviews`, {
        image: data.image,
        movieTitle: data.movieTitle,
        rating: data.rating,
        genre: data.genre,
        reviewTitle: data.reviewTitle,
        reviewContent: data.reviewContent,
      })
      .then((res) => {
        if (res.data.success) {
          alert('리뷰가 작성되었습니다.');
          navigate('/review');
          setIsLoading(false);
        } else {
          alert('작성에 실패하였습니다.');
          navigate('/review');
          setIsLoading(false);
        }
      })
      .catch((err) => {
        alert('작성에 실패하였습니다.');
        navigate('/review');
        setIsLoading(false);
      });

    setData({
      image: '',
      movieTitle: '',
      rating: '',
      genre: '',
      reviewTitle: '',
      reviewContent: '',
    });
  };

  const [data, setData] = useState({
    image: '',
    movieTitle: '',
    rating: '1',
    genre: '',
    reviewTitle: '',
    reviewContent: '',
  });

  const changhandle = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  if (isLoading) return <Loading />;

  return (
    <WriteFrom onSubmit={onClickHandler}>
      <WriteFormContainer>
        <WriteTitle>MovieInfo </WriteTitle>
        <MovieInfoContainer>
          <div>
            <MovieInfoTitle>포스터이미지url</MovieInfoTitle>
            <MovieInputBox
              type='url'
              placeholder='https://example.com'
              name='image'
              onChange={changhandle}
            />
          </div>
          <div>
            <MovieInfoTitle>영화제목</MovieInfoTitle>
            <MovieInputBox
              type='text'
              name='movieTitle'
              onChange={changhandle}
            />
          </div>
          <div>
            <MovieInfoTitle>별점</MovieInfoTitle>
            <SelectBox name='rating' onChange={changhandle}>
              <option value='1'>⭐️</option>
              <option value='2'>⭐️⭐️</option>
              <option value='3'>⭐️⭐️⭐️</option>
              <option value='4'>⭐️⭐️⭐️⭐️</option>
              <option value='5'>⭐️⭐️⭐️⭐️⭐️</option>
            </SelectBox>
          </div>
          <div>
            <MovieInfoTitle>장르</MovieInfoTitle>
            <MovieInputBox type='text' name='genre' onChange={changhandle} />
          </div>
        </MovieInfoContainer>
        <WriteTitle>Review</WriteTitle>
        <ReviewContainer>
          <MovieInfoTitle>제목</MovieInfoTitle>
          <ReviewInputBox
            type='title'
            name='reviewTitle'
            onChange={changhandle}
          />
          <MovieInfoTitle>내용</MovieInfoTitle>
          <ReviewTextarea
            name='reviewContent'
            cols='30'
            rows='10'
            onChange={changhandle}
          />
        </ReviewContainer>
      </WriteFormContainer>

      <WriteButtonContainer>
        <WriteSaveButton>글쓰기</WriteSaveButton>
        <WriteCloseButton
          onClick={() => {
            navigate('/review');
          }}
        >
          취소
        </WriteCloseButton>
      </WriteButtonContainer>
    </WriteFrom>
  );
};

export default ReviewWrite;

// 전체 Form
const WriteFrom = styled.form`
  background-color: #212223;

  width: 1000px;
  height: 900px;

  border-radius: 10%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0;
  margin: 0;
`;

// 큰제목
const MovieInfoTitle = styled.div`
  margin: 0px 0px 0px 90px;

  color: white;
  font-weight: bold;
`;

// 하위제목
const WriteTitle = styled.h1`
  /* background-color: skyblue; */
  color: white;
  margin-left: 110px;
`;

const WriteFormContainer = styled.div``;

//MovieInfo(영역)
const MovieInfoContainer = styled.div`
  /* background-color: salmon; */
  display: flex;
  flex-direction: column;

  height: 250px;
`;

//MovieInfo(input)

const MovieInputBox = styled.input`
  width: 800px;
  height: 30px;

  margin: 0px 0px 10px 90px;
  border: 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

//MovieInfo(Select)

const SelectBox = styled.select`
  width: 800px;
  height: 30px;

  margin: 0px 0px 10px 90px;
  border: 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

//리뷰

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewInputBox = styled.input`
  width: 800px;
  height: 30px;

  margin: 0px 0px 10px 90px;
  border: 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const ReviewTextarea = styled.textarea`
  width: 800px;
  height: 300px;

  margin: 0px 0px 10px 90px;
  border: 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

//하단버튼

const WriteButtonContainer = styled.div`
  /* background-color: skyblue; */
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WriteSaveButton = styled.button`
  width: 140px;
  height: 35px;
  margin-left: 70px;

  border: 0px;
  border-radius: 5px;
  background-color: #ffffff;

  color: black;

  :hover {
    background-color: rgba(0, 0, 0, 0.01);
    cursor: pointer;
  }
`;

const WriteCloseButton = styled.button`
  width: 140px;
  height: 35px;
  margin-left: 70px;

  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: white;

  :hover {
    background-color: rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }
`;
