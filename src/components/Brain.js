import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Brain.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function GroupExample() {
  const [showContent, setShowContent] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardTitle) => {
    setShowContent(true);
    setSelectedCard(cardTitle);
  };

  const closeContent = () => {
    setShowContent(false);
    setSelectedCard(null);
  };
  return (
    <CardGroup>
       <Card>
       <Link to="/Riddle">
          <Card.Img variant='top' className='Brain-Images' src="Images/Riddle.png" />
        </Link>
        <Card.Body>
          <Card.Title className='Brain-Card-Title'>Riddle Me This?</Card.Title>
          <Card.Text>
            Welcome to the Riddle Me This?. Explore a variety of riddles and test your problem-solving skills.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" className='Brain-Images' src="Images/Trivia.jpg"  />
        <Card.Body>
          <Card.Title className='Brain-Card-Title'>Trivia</Card.Title>
          <Card.Text>
            Welcome to the Trivia. Try out your knowledge on a variety of questions.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
      <Link to="/memory-game">
        <Card.Img variant="top" className='Brain-Images' src="Images/Memory.png" />
      </Link>
      <Card.Body>
        <Card.Title className='Brain-Card-Title'>Memory Game</Card.Title>
        <Card.Text>
          Welcome to the Memory Game. Challenge your memory with a variety of games.
        </Card.Text>
      </Card.Body>
    </Card>
    </CardGroup>
  );
}

export default GroupExample;
