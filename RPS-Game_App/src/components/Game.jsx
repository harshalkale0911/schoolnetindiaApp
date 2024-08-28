import { useState, useEffect } from 'react';
import { Button, Row, Col } from 'antd';
import Choices from './Choices';
import Scoreboard from './Scoreboard';
import Outcome from './Outcome';

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [outcome, setOutcome] = useState('');
  const [score, setScore] = useState({
    wins: 0,
    losses: 0,
    draws: 0,
  });

  useEffect(() => {
    const storedScore = JSON.parse(localStorage.getItem('score'));
    if (storedScore) setScore(storedScore);
  }, []);

  useEffect(() => {
    if (playerChoice !== null) {
      const computer = getComputerChoice();
      setComputerChoice(computer);
      const result = determineOutcome(playerChoice, computer);
      setOutcome(result);
      updateScore(result);
    }
  }, [playerChoice]);

  useEffect(() => {
    if (outcome !== '') {
      const timer = setTimeout(() => {
        setPlayerChoice(null);
        setComputerChoice(null);
        setOutcome('');
      }, 3000); // Keep the result displayed for 2 seconds

      return () => clearTimeout(timer); // Cleanup on component unmount
    }
  }, [outcome]);

  const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineOutcome = (player, computer) => {
    if (player === computer) return 'draw';
    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      return 'win';
    }
    return 'lose';
  };

  const updateScore = (result) => {
    const newScore = { ...score };
    if (result === 'win') newScore.wins += 1;
    else if (result === 'lose') newScore.losses += 1;
    else newScore.draws += 1;
    setScore(newScore);
    localStorage.setItem('score', JSON.stringify(newScore));
  };

  const handleChoice = (choice) => {
    setPlayerChoice(choice);
  };

  const handleRestart = () => {
    setScore({ wins: 0, losses: 0, draws: 0 });
    setPlayerChoice(null);
    setComputerChoice(null);
    setOutcome('');
    localStorage.removeItem('score');
  };

  return (
    <div className="container">
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col>
          <Choices setPlayerChoice={handleChoice} />
          <Outcome outcome={outcome} playerChoice={playerChoice} computerChoice={computerChoice} />
          <Scoreboard score={score} />
          <Button type="primary" onClick={handleRestart} style={{ marginTop: 16 }}>Restart</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Game;
