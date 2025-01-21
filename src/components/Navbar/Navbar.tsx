import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className="container">
        <img className="parkvahan-logo" src="src/assets/parkvahan-logo.png"/>
        <button className="book-appointment" type="submit">
          <span>Book Appointment</span>
          </button>
    </div>
    </nav>
  )
}

export default Navbar
