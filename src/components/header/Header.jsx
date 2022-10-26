import { DivHeaderSection } from './style'
import logo from '../../image/logo.png'
import { useCookies } from 'react-cookie'
import axios from 'axios';

export default function Header(){
  const [ cookie, setCookie, removeCookie ] = useCookies();
  const isLogin = cookie.token

  const logout = () => {
    axios.defaults.headers.post['authorization'] = cookie.token;
    axios.defaults.headers.post['refresh-token'] = cookie.refreshtoken;
    axios.post('http://43.201.55.251:8080/api/member/logout')
    .then(res => {
      removeCookie('token')
      removeCookie('refreshtoken')
      if(res.data.success) alert(res.data.data)
      else alert(res.data.error.message)
      window.location.reload();
    }).catch(err => {
      alert('logout failed')
      console.log(err)
      removeCookie('token')
      removeCookie('refreshtoken')
      window.location.reload();
    })
  }
  
  return <DivHeaderSection>
          <div className="headerWrap">
            <div className='logoBox'><a href='/'><img src={logo} className='logo' /></a></div>
            <div className='menuBox'><a href='/review'><h2>Review</h2></a></div>
            <div className='loginBox'>{isLogin ? <a href='#' onClick={logout}><h2>Logout</h2></a> : <a href='/login'><h2>Login</h2></a>}</div>
          </div>
         </DivHeaderSection>
}