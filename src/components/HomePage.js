import React, { Component } from 'react';
import './HomePage.css';
import { fetchQuote } from '../utils/api';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: { text: '', author: '' },
    };
  }

  async componentDidMount() {
    try {
      const result = await fetchQuote();
      this.setState({ quote: result });
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  }

  render() {
    const { quote } = this.state;

    return (
      <div className="homepage-container">
        <section className="hero-section">
          <h1>
            Welcome to <span className="brand-name">Sab-Kuch-Hub</span>
          </h1>
          <p className='TagLine'>
            Kickstart your Mind, Lighten Up your Mood, get inspired, and explore endless possibilities.
          </p>
        </section>
        <section className="quote-section">
          <h3>
            Quote Of The Day!
          </h3>
          <hr></hr>
          <p className='Quote'>{quote.text}</p>
          <p className='Author'>- {quote.author}</p>
        </section>
        <hr></hr>
        <section className="feature-section">
          <div className="card" style={{ width: '20rem' }}>
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h2 className="card-title">Brain Jolt</h2>
              <p className="card-text">
                Challenge your mind with our collection of mind-bending brain teasers and riddles.
              </p>
            </div>
          </div>

          <div className="card" style={{ width: '20rem' }}>
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h2 className="card-title">Innovation</h2>
              <p className="card-text">
                Ignite your creativity with unique and exciting ideas for various topics and projects.
              </p>
            </div>
          </div>

          <div className="card" style={{ width: '20rem' }}>
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h2 className="card-title">Mood Booster</h2>
              <p className="card-text">
                Lift your spirits with jokes,Games and chill music to brighten your mood.
              </p>
            </div>
          </div>
        </section>
        
      </div>
    );
  }
}

export default HomePage;
