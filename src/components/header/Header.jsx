import { DivHeaderSection } from './style'
import logo from '../../image/logo.png'
import { useCookies } from 'react-cookie'
import axios from 'axios';

export default function Header(){
  const [cookie, setCookie, removeCookie ] = useCookies();

  const logout = () => {
    axios.defaults.headers.post['authorization'] = cookie.token;
    axios.post('http://43.201.55.251:8080/api/member/logout')
    removeCookie('token')
  }
  
  return <DivHeaderSection>
          <div className="headerWrap">
            <div className='logoBox'><a href='/'><img src={logo} className='logo' /></a></div>
            <div className='menuBox'><a href='/review'><h2>Review</h2></a></div>
            <div className='loginBox'>{cookie.token ? <a href='/login' onClick={logout}><h2>Logout</h2></a> : <a href='/login'><h2>Login</h2></a>}</div>
          </div>
         </DivHeaderSection>

}