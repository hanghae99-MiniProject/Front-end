import { DivJoinBox } from './style'
import { useState } from 'react'
import useInput from '../../hook/useInput';

export default function JoinForm(){
  const [ memberName, setMemberName ] = useInput('');
  const [ password, setPassword ] = useInput('');
  const [ passwordConfirm, setPasswordConfirm ] = useInput('');
  const [ idMsg, setIdMsg ] = useState('');
  const [ pwMsg, setPwMsg ] = useState('');

  const checkMemberName = () => {
    const exp = /^(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{2,10}$/;
    const result = exp.test(memberName)

    if(result) {
      setIdMsg('');
      // 서버로 중복체크요청, 중복일 경우 메세지 출력 후 result false로 return
    }
    else setIdMsg('2-10자 길이 영문/숫자/특수문자(._-) 사용 가능');
    
    return result;
  }

  const checkPassword = () => {
    const exp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,20}$/;
    const result = exp.test(password)

    if(result) setPwMsg('');
    else setPwMsg('8-20자 영문/숫자/특수문자(!@#$%^&*) 사용 가능');
    
    return result;
  }

  const checkPasswordConfirm = () => {    
    const result = password === passwordConfirm

    if(result) setPwMsg('');
    else setPwMsg('비밀번호가 일치하지 않습니다.');
    
    return result;
  }

  const join = () => {
    if(!(checkMemberName() && checkPassword() && checkPasswordConfirm())) return;
    // 서버로 Login 요청할 예정
    console.log('가입')
  }

  return <DivJoinBox>
    <div className='titleBox'>
      <h1>JOIN</h1>
      <hr />
    </div>
    <div className='inputBox'>
      <h3>ID</h3>
      <p>{idMsg}</p>
      <input type='text' onChange={setMemberName} onBlur={checkMemberName}/>
    </div>
    <div className='inputBox'>
      <h3>PASSWORD</h3>
      <p>{pwMsg}</p>
      <input type='text' onChange={setPassword} onBlur={checkPassword}/>
    </div>
    <div className='inputBox'>
      <h3>PASSWORD CONFIRM</h3>
      <input type='text' onChange={setPasswordConfirm} onBlur={checkPasswordConfirm}/>
    </div>
    <div className='buttonBox'>
      <a href='#' onClick={join}>JOIN</a>
      <a href='/login'>CANCLE</a>
    </div>
  </DivJoinBox>
}