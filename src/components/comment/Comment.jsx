import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { API_URL } from '../../shared/Request';
import {
  Btn,
  CommentsBox,
  CommentsDiv,
  IdText,
  CommnetsInputBox,
  InputBtn,
  InputText,
  CommentText,
  CommentBox,
} from './style';
import { Input } from './style';
import axios from 'axios';
import { useCookies } from 'react-cookie';
// component data => dispatch => 미들웨어 =>  reducer => store에 저장

export default function Comment({ reviewId, commentList }) {
  console.log(commentList);
  const [state, setState] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(Array.from(commentList));
  const dispatch = useDispatch();

  const [cookie, setCookie, removeCookie] = useCookies();

  const onChangeHandler = (e) => {
    setState(e.target.value);
    console.log('인풋 : ', e.target.value);
  };

  const onSubmitHandler = () => {
    if (state.trim().length <= 0) {
      alert('댓글을 작성해주세요.');
      return;
    }
    axios.defaults.headers.post['authorization'] = cookie.token;
    axios.defaults.headers.post['refresh-token'] = cookie.refreshtoken;
    console.log(reviewId);
    axios.post(`${API_URL}/api/comments`, {
      reviewId: Number(reviewId),
      comment: state,
    });
  };

  const deleteOnClickHandler = (id) => {
    axios.defaults.headers.delete['authorization'] = cookie.token;
    axios.defaults.headers.delete['refresh-token'] = cookie.refreshtoken;
    console.log(reviewId);
    axios.delete(`${API_URL}/api/comment/${id}`);
  };

  return (
    <CommentBox>
      <CommentsDiv>
        <CommnetsInputBox
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitHandler(state);
          }}
        >
          <InputText>댓글</InputText>
          <Input type="text" onChange={onChangeHandler} />
          <InputBtn>확인</InputBtn>
        </CommnetsInputBox>
        {comments?.map((comment) => {
          <CommentsBox>
            <IdText>{comment.memberName}</IdText>
            <CommentText>{comment.comment}</CommentText>
            <Btn>수정</Btn>
            <Btn
              onClick={() => {
                deleteOnClickHandler(comment.commentId);
              }}
            >
              삭제
            </Btn>
          </CommentsBox>;
        })}
      </CommentsDiv>
    </CommentBox>
  );
}

//
