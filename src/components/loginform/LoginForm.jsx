import axios from 'axios';
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom';

import useInput from '../../hook/useInput';
import { API_URL } from '../../shared/Request';
import { DivLoginBox } from './style'

export default function LoginForm(){
  const navigate = useNavigate();
  const [ cookie, setCookie, removeCookie ] = useCookies();

  const [ memberName, setMemberName ] = useInput('');
  const [ password, setPassword ] = useInput('');
  const [ idMsg, setIdMsg ] = useState('');
  const [ pwMsg, setPwMsg ] = useState('');
  
  const checkMemberNameBlank = () => {
    const result = memberName.trim().length > 0;
    if(result) setIdMsg('');
    else setIdMsg('ID를 입력해주세요.');
    return result;
  }

  const checkPasswordBlank = () => {
    const result = password.trim().length > 0;
    if(result) setPwMsg('');
    else setPwMsg('비밀번호를 입력해주세요.');
    return result;
  }

  const login = () => {
    if(!(checkMemberNameBlank() && checkPasswordBlank())) return;
    const loginInfo = {
      memberName: memberName,
      password: password,
    }

    axios.post(`${API_URL}/api/member/login`, loginInfo)
    .then((res) => {
      if(res.data.success){
        console.log(res.data.data.memberName)
        setCookie('token', res.request.getResponseHeader('authorization'));
        setCookie('refreshtoken', res.request.getResponseHeader('refresh-token'));
        localStorage.setItem('memberName', res.data.data.memberName);
        navigate('/');
      } else {
        alert(res.data.error.message);
      }
    })
  }

  return <DivLoginBox>
    <div className='titleBox'>
      <h1>LOGIN</h1>
      <hr />
    </div>
    <div className='inputBox'>
      <h3>ID<span>{idMsg}</span></h3>
      <input type='text' onChange={setMemberName} onBlur={checkMemberNameBlank}/>
    </div>
    <div className='inputBox'>
      <h3>PASSWORD<span>{pwMsg}</span></h3>
      <input type='password' onChange={setPassword} onBlur={checkPasswordBlank}/>
    </div>
    <div className='buttonBox'>
      <a href='#' onClick={login}>LOGIN</a>
      <a href='/join'>JOIN</a>
    </div>
  </DivLoginBox>
}