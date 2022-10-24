import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import { addMoviesWriteThunk } from '../redux/modules/writeSlice';

// import Footer from '../components/footer/Footer';
// import Header from '../components/header/Header';

const Write = () => {
  const dispatch = useDispatch();

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

    dispatch(
      addMoviesWriteThunk({
        image: data.image,
        movieTitle: data.movieTitle,
        rating: data.rating,
        genre: data.genre,
        reviewTitle: data.reviewTitle,
        reviewContent: data.reviewContent,
      })
    );
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

  return (
    <WriteFrom onSubmit={onClickHandler}>
      <WriteFormContainer>
        포스터이미지url :
        <input
          type='url'
          placeholder='https://example.com'
          name='image'
          onChange={changhandle}
        />
        영화제목 :
        <input type='text' name='movieTitle' onChange={changhandle} />
        별점 :
        <select name='rating' onChange={changhandle}>
          <option value='1'>⭐️</option>
          <option value='2'>⭐️⭐️</option>
          <option value='3'>⭐️⭐️⭐️</option>
          <option value='4'>⭐️⭐️⭐️⭐️</option>
          <option value='5'>⭐️⭐️⭐️⭐️⭐️</option>
        </select>
        장르 : <input type='text' name='genre' onChange={changhandle} />
        <h2>Review</h2>
        제목 : <input type='title' name='reviewTitle' onChange={changhandle} />
        내용 :
        <textarea
          name='reviewContent'
          cols='30'
          rows='10'
          onChange={changhandle}
        />
      </WriteFormContainer>

      <div>
        <button>글쓰기</button>
        <button>취소</button>
      </div>
    </WriteFrom>
  );
};

export default Write;

const WriteFrom = styled.form`
  background-color: #d4d4ff;
  width: 1000px;
  height: 400px;
`;

const WriteFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
