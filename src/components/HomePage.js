import React, { Component } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <section className="hero-section">
          <h1 className='Intro'>
            Welcome to <span className="brand-name">Utility-Hub</span>
          </h1>
          <p className='TagLine'>
            Kickstart your Mind, Lighten Up your Mood, Get inspired, and explore endless possibilities.
          </p>
        </section>
       
        <section className="feature-section">
        <Carousel data-bs-theme="dark">
  <Carousel.Item >
    <Link to="/Brain">
      <img
        className="d-block w-100"
        src="Images/Brain.jpg"
        alt="First slide"
        style={{ objectFit: 'cover', height: '500px' }}
      />
    </Link>
    <Carousel.Caption className="text-white">
      <h5 className="Caption-Heading">Brain Jolt</h5>
      <p className="Caption-Text">Challenge your mind with our collection of mind-bending brain teasers and riddles.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <Link to="/Ideas">
      <img
        className="d-block w-100"
        src="Images/Idea.jpg"
        alt="Second slide"
        style={{ objectFit: 'cover', height: '500px' }}
      />
    </Link>
    <Carousel.Caption className="text-white">
      <h5 className="Caption-Heading">Innovation</h5>
      <p className="Caption-Text">Ignite your creativity with unique and exciting ideas for various topics and projects.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <Link to="/Mood">
      <img
        className="d-block w-100"
        src="Images/Mood.jpg"
        style={{ objectFit: 'cover', height: '500px' }}
        alt="Third slide"
      />
    </Link>
    <Carousel.Caption className="text-white">
      <h5 className="Caption-Heading">Mood Booster</h5>
      <p className="Caption-Text">Lift your spirits with jokes, games, and chill music to brighten your mood.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </section>
      </div>
    );
  }
}

export default HomePage;
