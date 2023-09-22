
import { Link } from 'react-router-dom'
import { NavbarWrapper } from './Navbar.styles'

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link to="/courses" className="navLogo" >
<img  src="/logo.png" alt="graduation-cap"/>
      <h1 className='logoText'>Cloudversity</h1>
      </Link>
    </NavbarWrapper>
  )
}

export default Navbar