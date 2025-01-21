import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  // State to manage form visibility
  const [showFindForm, setShowFindForm] = useState(false);
  const [showListForm, setShowListForm] = useState(false);

  // Handlers to toggle form visibility
  const toggleFindForm = () => setShowFindForm(!showFindForm);
  const toggleListForm = () => setShowListForm(!showListForm);

  return (
    <div>
      <section className="container1 m-5">
        <div className="">
          <h1 className="">
            Find Nearby Parking Spaces When You Need Them
          </h1>
          <p className="">
            Book secure, affordable parking in nearby apartments or gated communities. No more searching for parking—just park and go!
          </p>
          <div className="">
            <button className="btn btn-primary" onClick={toggleFindForm}>
              Find Parking Space
            </button>
            <button className="btn btn-secondary" onClick={toggleListForm}>
              List Your Property
            </button>
          </div>
        </div>
      </section>

      {/* Form for finding parking space */}
      {showFindForm && (
        <div className="form-container">
          <h2>Find Parking Space</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Contact:
              <input type="text" name="contact" required />
            </label>
            <label>
              Area:
              <input type="text" name="area" required />
            </label>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      )}

      {/* Form for listing property */}
      {showListForm && (
        <div className="form-container">
          <h2>List Your Property</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Contact:
              <input type="text" name="contact" required />
            </label>
            <label>
              Property Location:
              <input type="text" name="property" required />
            </label>
            <button type="submit" className="btn btn-secondary">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;
