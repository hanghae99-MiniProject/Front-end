import { DivHeaderSection } from './style'
import logo from '../../image/logo.png'

import { useNavigate } from 'react-router-dom'

export default function Header(){

  return <DivHeaderSection>
          <div className="headerWrap">
            <div className='logoBox'><img src={logo} className='logo' /></div>
            <div className='menuBox'><a href='/review'><h2>Review</h2></a></div>
            <div className='loginBox'><a href='/login'><h2>Login</h2></a></div>
          </div>

         </DivHeaderSection>

}