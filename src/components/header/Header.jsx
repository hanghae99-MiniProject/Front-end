import { DivHeaderSection } from './style'
import logo from '../../image/logo.png'
import { useCookies } from 'react-cookie'

export default function Header(){
  const [cookie, setCookie, removeCookie ] = useCookies();

  const logout = () => {
    removeCookie('token')
  }

  return <DivHeaderSection>
          <div className="headerWrap">
            <div className='logoBox'><img src={logo} className='logo' /></div>
            <div className='menuBox'><a href='/review'><h2>Review</h2></a></div>
            <div className='loginBox'>{cookie.token ? <a href='/login' onClick={logout}><h2>Logout</h2></a> : <a href='/login'><h2>Login</h2></a>}</div>
          </div>

         </DivHeaderSection>

}