import { DivLoginBox } from './style'
import { useState } from 'react'
import useInput from '../../hook/useInput';

export default function LoginForm(){
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
    // 서버로 Login 요청할 예정
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
      <input type='text' onChange={setPassword} onBlur={checkPasswordBlank}/>
    </div>
    <div className='buttonBox'>
      <a href='#' onClick={login}>LOGIN</a>
      <a href='/join'>JOIN</a>
    </div>
  </DivLoginBox>
}