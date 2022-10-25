import { DivLoginBox } from './style'
import { useState } from 'react'
import useInput from '../../hook/useInput';
import { useCookies } from 'react-cookie'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginForm(){
  const [ cookie, setCookie, removeCookie ] = useCookies();
  const navigate = useNavigate();

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

    axios.post('http://43.201.55.251:8080/api/member/login', loginInfo)
    .then((res) => {
      if(res.data.success){
        setCookie('token', res.request.getResponseHeader('authorization'))
        setCookie('refreshtoken', res.request.getResponseHeader('refresh-token'))
        navigate('/')
      } else {
        alert(res.data.error.message)
      }

    })
    .catch((err) =>{
      console.log(err)
      // 여유있을 때 에러 메세지 추가
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