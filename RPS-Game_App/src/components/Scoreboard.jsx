import React from 'react';
import { Card } from 'antd';
import './Scoreboard.css';

const Scoreboard = ({ score }) => {
  return (
    <Card title="Scoreboard" className="scoreboard-card">
      <p>Wins: {score.wins}</p>
      <p>Losses: {score.losses}</p>
      <p>Draws: {score.draws}</p>
    </Card>
  );
};

export default Scoreboard;
