import React from 'react';
import { Button, Row, Col } from 'antd';

const Choices = ({ setPlayerChoice }) => {
  const handleClick = (choice) => {
    setPlayerChoice(choice);
  };

  return (
    <div>
      <Row gutter={16} justify="center">
        <Col>
          <Button onClick={() => handleClick('rock')}>Rock</Button>
        </Col>
        <Col>
          <Button onClick={() => handleClick('paper')}>Paper</Button>
        </Col>
        <Col>
          <Button onClick={() => handleClick('scissors')}>Scissors</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Choices;
