
import logo from '../asset/cropped-logo.png'
import { FlatButton } from './FlatButton'
function Navbar() {

  return (
  <>
  <nav className="navbar navbar-expand-lg " data-bs-theme="light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logo} alt='logo'/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/arkcitygas">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/#about">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/#service">Services</a>
        </li>
        

        <li className="nav-item">
          <a href='https://wa.link/6hbzdj' target='_blank' rel='noreferrer'><FlatButton  onClick={()=>{}} title='Contact Us' className='btndark'/></a>
        </li>

        
       

      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar