import './Navbar.css'

const Navbar = () => {
  const phoneNumber = "9876543210";
  return (
    <nav className='nav'>
      <div className="container">
        <div className='logo-container'>
        <img className="parkvahan-logo me-3" src="parkvahan-logo.png"/>
        <h1>ParkVaahan</h1>
        </div>
        <button className="call-appointment">
        <a href={`tel:${phoneNumber}`} className="phone-number-link">
        Call: {phoneNumber}
      </a>
          </button>
    </div>
    </nav>
  )
}

export default Navbar
