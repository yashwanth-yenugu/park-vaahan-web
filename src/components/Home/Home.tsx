import { useState } from 'react';
import './Home.css';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    area: ''
  });

  const [isListingParking, setIsListingParking] = useState(false); // New state to toggle views

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
    // Reset form
    setFormData({ name: '', contact: '', area: '' });
  };

  const toggleView = () => {
    setIsListingParking(!isListingParking); // Toggle between views
  };
  const testimonials = [
    {
      image: "https://via.placeholder.com/150",
      name: "John Doe",
      rating: 5,
      review: "This service exceeded my expectations! Highly recommend.",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Jane Smith",
      rating: 4,
      review: "Great experience and very professional!",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Sam Wilson",
      rating: 5,
      review: "Top-notch service with excellent results!",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Lisa Brown",
      rating: 4,
      review: "Professional and reliable! Will use again.",
    },
  ];

  return (
    <>
      <section className="section-1 mt-3">
        <div className='container'>
          <div className='row'>
          <div className='parking-spaces col-md-6 col-12'>
            <h1>Find Nearby Parking Spaces <br /> When You Need Them</h1>
            <p>Book secure, affordable parking in nearby apartments or gated communities. No more searching for parking—just park and go!</p>
          </div>
          <div className='col-md-6 col-12 row'>
            <div className="card-container">
              <div className="card">
                <h3>{isListingParking ? "I Want to List Parking Spaces" : "I’m Looking for Parking"}</h3> {/* Conditionally render heading */}
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact">Contact:</label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="Enter your contact details"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="area">Area:</label>
                    <input
                      type="text"
                      id="area"
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      placeholder="Enter the area for parking"
                      required
                    />
                  </div>

                  <button type="submit" className="submit-button">Submit</button>
                </form>
              </div>
            </div>
            <div>
            <button className='click-button' onClick={toggleView}>
              {isListingParking ? "I’m Looking for Parking" : "I Want to List Parking Spaces"}
            </button> {/* Conditionally change the button text */}
            </div>
            
          </div>
          </div>
        </div>

      </section>
      {/* <div>
    <img className='parking-space' src="parking-space.png" alt="Parking Space" />
  </div> */}
      <section className="section-2">
        <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-12'>
          <div className='parking-app'>
            <h1 >Your Convenient Solution <br/>for Finding Parking</h1>
            <p>Whether you’re struggling to find parking in a busy area or need a long-term spot near your home, our app connects you with available spaces in nearby apartments or gated communities. Forget the hassle of street parking—book your monthly parking spot easily and securely today.</p>
            </div>
            <div className="feature-list content-1 ">
  <h3>For Parkers (Users):</h3>
  <ul>
    <li>Search for available parking spaces in nearby apartments or gated communities.</li>
    <li>Book monthly parking at affordable rates with secure payment options.</li>
    <li>Find parking close to your home, saving time and avoiding the stress of street parking.</li>
  </ul>
</div>
<div className="feature-list content-1 ">
  <h3>For Space Owners:</h3>
  <ul>
    <li>List available parking spaces in your apartment or gated community.</li>
    <li>Set your pricing and availability to earn passive income.</li>
    <li>Manage and monitor bookings effortlessly.</li>
  </ul>
</div>

          </div>
          <div className='col-md-6 col-12'>
          
            <img className='find-parking' src="/findparking.png" alt="find parking" />
            

          </div>
        </div>
        </div>
      </section>

      <section className="section-3">
      <h2 className="section-title">How It Works</h2>
        <div className='container'>
        <div className='row justify-content-between'>

          <div className='col-md-6 col-12 row'>
          <h3 className='for-users'>For Parkers (Users):</h3>
          <div className="content-box">
            <div className='search-near'>
              <h6>Search Nearby</h6>
              <p>Use the app to find available parking spaces in apartments or gated communities near you.</p>
            </div>
          <div>
            <img src="search-logo.png" className="logos" alt="Search Nearby Logo" />
          </div>
          </div>
          <div className="content-box">
            <div className='search-near'>
              <h6>Book Space for Your Car</h6>
              <p>Select a space that fits your needs and book it for a monthly fee.</p>
            </div>
          <div>
            <img src="book-space.png" className="logos" alt="Search Nearby Logo" />
          </div>
          </div>
          <div className="content-box">
            <div className='search-near'>
              <h6>Parking</h6>
              <p>Enjoy guaranteed, secure parking without the hassle of street parking.</p>
            </div>
          <div>
            <img src="parking-1.jpg" className="logos" alt="Search Nearby Logo" />
          </div>
          </div>

          </div>
          <div className='col-md-6 col-12 row'>
          <h3 className='for-users'>For Space Owners</h3>
          <div className="content-box">
            <div className='search-near'>
              <h6>Affordable</h6> 
              <p>Competitive pricing for monthly parking. Save on daily parking fees.</p>
            </div>
          <div>
            <img src="Affordable.jpg" className="logos" alt="Search Nearby Logo" />
          </div>
          </div>
          <div className="content-box">
            <div className='search-near'>
              <h6>Stress-Free</h6>
              <p>Passive Income: Earn money by listing your unused parking spaces.</p>
            </div>
          <div>
            <img src="stress-free.jpg" className="logos" alt="Search Nearby Logo" />
          </div>
          </div>
          <div className="content-box">
            <div className='search-near'>
              <h6>Community Focused</h6>
              <p>Help your neighbors by providing secure parking options.</p>
            </div>
          <div>
            <img src="Community-Focused.jpg" className="logos" alt="Search Nearby Logo" />
          </div>
          </div>

          </div>
          </div>
        </div>
      

      
        
       
      </section>
      <section className="section-4">
      <div className="testimonials-container">
      <h2>What Our Users Are Saying</h2>
      <div className="testimonials-auto-scroll">
        {/* Duplicate testimonials for seamless looping */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img
              src={testimonial.image}
              alt={`${testimonial.name}'s avatar`}
              className="testimonial-image"
            />
            <h3>{testimonial.name}</h3>
            <p className="testimonial-rating">
              {"⭐".repeat(testimonial.rating)}
            </p>
            <p className="testimonial-review">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
      </section>
      <section className="section-5">
        <div className='container'>
          <div className='row'>
          <div className='ParkingSpaces'>
            <h1>Find Nearby Parking Spaces When You Need Them</h1>
            <p>Book secure, affordable parking in nearby apartments or gated communities. No more searching for parking—just park and go!</p>
            <div>
              <button className='button1'>I’m Looking for Parking</button>
              <button className='button2'>I Want to List Parking Spaces</button>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
