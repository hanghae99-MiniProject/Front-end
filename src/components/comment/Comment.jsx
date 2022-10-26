import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { API_URL } from '../../shared/Request';
import useInput from '../../hook/useInput';

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
  const [state, setState] = useState('');
  // const [comment, setComment] = useState('');
  const [comments, setComments] = useState(Array.from(commentList));
  const dispatch = useDispatch();

  const [cookie, setCookie, removeCookie] = useCookies();

  const onChangeHandler = (e) => {
    setState(e.target.value);
  };

  const onSubmitHandler = () => {
    if (state.trim().length <= 0) {
      alert('댓글을 작성해주세요.');
      return;
    }
    axios.defaults.headers.post['authorization'] = cookie.token;
    axios.defaults.headers.post['refresh-token'] = cookie.refreshtoken;
    axios.post(`${API_URL}/api/comments`, {
      reviewId: Number(reviewId),
      comment: state,
    });
  };

  return (
    <CommentBox>
      <CommentsDiv>
        <CommnetsInputBox
          onSubmit={(e) => {
            onSubmitHandler(state);
          }}
        >
          <InputText>댓글</InputText>
          <Input type="text" onChange={onChangeHandler} />
          <InputBtn>확인</InputBtn>
        </CommnetsInputBox>
          {comments.map((comment) => <CommentLine reviewId={reviewId} content={comment} key={comment.commentId}/>)}

      </CommentsDiv>
    </CommentBox>
  );
}

const CommentLine = ({reviewId, content}) => {
  const [ cookie, setCookie, removeCookie ] = useCookies();
  const [ isEdit, setIsEdit ] = useState(false);
  const [ editComment, editCommentHandler ] = useInput();

  const deleteOnClickHandler = () => {
    axios.defaults.headers.delete['authorization'] = cookie.token;
    axios.defaults.headers.delete['refresh-token'] = cookie.refreshtoken;
    axios.delete(`${API_URL}/api/comment/${content.commentId}`)
    .then(res => {
      if(res.data.success){
        alert('삭제되었습니다.');
      } else {
        alert(res.data.error.message);
      }
      window.location.reload();
    })
  };

  const saveOnClickHandler = () => {
    axios.defaults.headers.put['authorization'] = cookie.token;
    axios.defaults.headers.put['refresh-token'] = cookie.refreshtoken;
    axios.put(`${API_URL}/api/comments/${content.commentId}`, {
      reviewId: reviewId,
      comment: editComment
    })
    .then(res => {
      if(res.data.success){
        alert('수정되었습니다.');
      } else {
        alert(res.data.error.message)
      }
      window.location.reload();
    })
  }

  return <CommentsBox>
      <IdText>{content.memberName}</IdText>
      { isEdit ? <input type='text' defaultValue={content.comment} onChange={editCommentHandler} /> : <CommentText>{content.comment}</CommentText> }
      { isEdit ? <Btn onClick={saveOnClickHandler}>저장</Btn> : <Btn onClick={() => {setIsEdit(true)}}>수정</Btn>}
      <Btn onClick={deleteOnClickHandler}> 삭제 </Btn>
  </CommentsBox>
}