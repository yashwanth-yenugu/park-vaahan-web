// import React from 'react'
import './Fotter.css'
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-container"> 
          <div className="container">
            <div className="row">
              <div className="footer-mobile">
                <div className="mt-2 row">
                  <div className="col-12 col-md-3">
                    <div className="footer-img-para">
                      <a className="navbar-brand" href="#">
                        <img className="parkvahan-logo" src="public/parkvahan-logo.png"/>
                      </a>
                      <p className="mt-2 d-none d-lg-block park-para">Transforming Parking in Urban Communities. Connect with nearby apartment complexes and gated communities to secure your monthly parking space. Say goodbye to daily parking hassles.</p>
                    </div>
                  </div>

                  <div className="col-12 col-md-3 d-flex">
                    <div className="footer-links">
                      <h3>About Us</h3>
                      <p><a href="">Who We Are</a></p>
                      <p><a href="">Leadership</a></p>
                      <p><a href="">Client Partnerships</a></p>
                      <p><a href="">Classic LMS</a></p>
                      <p><a href="">Inclusion & Diversity</a></p>
                    </div>
                  </div>

                  <div className="col-12 col-md-3 d-flex">
                    <div className="footer-links">
                      <h3>Our Impact</h3>
                      <p><a href="">Quality Education</a></p>
                      <p><a href="">Decent Work & Economic Growth</a></p>
                      <p><a href="">Client Engagement</a></p>
                      <p><a href="">Industry Innovation & Infrastructure</a></p>
                    </div>   
                  </div>

                  <div className="col-12 col-md-3 d-flex">
                    <div className="footer-links">
                      <h3>Explore ParkVahan</h3>
                      <p><a href="">Company Overview</a></p>
                      <p><a href="">Careers at ParkVahan</a></p>
                      <p><a href="">Terms of Use</a></p>
                      <p><a href="">Privacy & Security</a></p>
                    </div>   
                  </div>

                  <div className="col-12">
                    <div className="icons-container pt-5">
                      <div>
                        <p className="all-rights-para">© 2025 ParkVahan. All rights reserved.</p>
                      </div>
                      <div className="d-flex footer-icon-container">
                        <div className="footer-icons">
                          <i className="bi bi-facebook"></i>
                        </div>
                        <div className="footer-icons">
                          <i className="bi bi-twitter"></i>
                        </div>
                        <div className="footer-icons">
                          <i className="bi bi-linkedin"></i>
                        </div>
                        <div className="footer-icons">
                          <i className="bi bi-youtube"></i>
                        </div>
                        <div className="footer-icons">
                          <i className="bi bi-globe"></i>
                        </div>
                        <div className="footer-icons">
                          <i className="bi bi-behance"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </footer>
    </div>
  )
}

export default Footer
