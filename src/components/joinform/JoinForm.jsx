import { DivJoinBox } from './style'
import { useState } from 'react'
import useInput from '../../hook/useInput';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../shared/Request';

export default function JoinForm(){

  const navigate = useNavigate();
  
  const [ memberName, setMemberName ] = useInput('');
  const [ password, setPassword ] = useInput('');
  const [ passwordConfirm, setPasswordConfirm ] = useInput('');
  const [isMemberNameCheck, setIsMemberNameCheck] = useState(false)

  const [ idMsg, setIdMsg ] = useState('');
  const [ pwMsg, setPwMsg ] = useState('');
  
  const checkMemberName = () => {
    const exp = /^(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{2,10}$/;
    const result = exp.test(memberName)

    if(!result){
      setIdMsg('2-10자 길이 영문/숫자/특수문자(._-) 사용 가능');
      setIsMemberNameCheck(false)
      return result;
    }

    const temp = { memberName: memberName }
    axios.post(`${API_URL}/api/member/id-check`, temp)
    .then(res => {
      console.log(res.data)
      if(res.data.success){
        setIdMsg('')
        setIsMemberNameCheck(true)
      } else {
        setIdMsg(res.data.error.message)
        setIsMemberNameCheck(false)
      }
    })
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
    if(!( isMemberNameCheck && checkPassword() && checkPasswordConfirm())) return;
    
    const joinInfo = {
      memberName: memberName,
      password: password,
      passwordConfirm: passwordConfirm
    }

    axios.post(`${API_URL}/api/member/signup`, joinInfo)
    .then((res) => {
      if(res.data.success){
        alert(res.data.data)
        navigate('/login')
      } else {
        alert(res.data.error.message)
      }

    })

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
      <input type='password' onChange={setPassword} onBlur={checkPassword}/>
    </div>
    <div className='inputBox'>
      <h3>PASSWORD CONFIRM</h3>
      <input type='password' onChange={setPasswordConfirm} onBlur={checkPasswordConfirm}/>
    </div>
    <div className='buttonBox'>
      <a href='#' onClick={join}>JOIN</a>
      <a href='/login'>CANCLE</a>
    </div>
  </DivJoinBox>
}