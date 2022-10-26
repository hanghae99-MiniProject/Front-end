import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

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

// component data => dispatch => 미들웨어 =>  reducer => store에 저장

const Comment = (reviewId, commentList) => {
  const [state, setState] = useState('');
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setState(e.target.value);
    console.log('인풋 : ', e.target.value);
  };

  const onSubmitHandler = () => {
    //dispatch(__postComment(state));
    // setComment([...Comment, { reviewId: comment.length + 1, comment: state }]);
    console.log('서브밋', state);
  };

  const deleteOnClickHandler = () => {
    // dispatch(__deleteComment());
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
        {commentList.map((comment) => {})}
        <CommentsBox>
          <IdText>1</IdText>
          <CommentText>ㄹㄹㄹ</CommentText>
          <Btn>수정</Btn>
          <Btn onClick={deleteOnClickHandler}>삭제</Btn>
        </CommentsBox>
      </CommentsDiv>
    </CommentBox>
  );
};

export default Comment;

//
