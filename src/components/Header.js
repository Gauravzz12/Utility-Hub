import React, { Component } from 'react';
import './HomePage';
import './HomePage.css';
import { fetchRandomQuote } from '../utils/api';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Header extends Component {
  state = {
    quote: { text: 'Believe In Yourself', author: 'Gaurav' },
    showModal: false,
  };

  fetchRandomQuoteAndUpdateState = async () => {
    const newQuote = await fetchRandomQuote();
    if (newQuote) {
      this.setState({ quote: newQuote, showModal: true });
    }
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { quote, showModal } = this.state;

    return (
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary custom-navbar">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              UTILITY-HUB
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/brain">Brain</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/mood">Mood</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/ideas">Ideas</Link>
                </li>
            </ul>
              <button className="btn btn-outline-success" onClick={this.fetchRandomQuoteAndUpdateState}>
                Get Inspired
              </button>
            </div>
          </div>
        </nav>
        <Modal show={showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Here is Some Inspiration for You</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className='quote-text'>{quote.text}</p>
            <p className="Author">- {quote.author}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModal} className='Close-button'>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </header>
    );
  }
}

export default Header;
