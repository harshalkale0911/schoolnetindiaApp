import React from 'react';
import { Alert, Row, Col, Card } from 'antd';
import './Outcome.css';

const Outcome = ({ outcome, playerChoice, computerChoice }) => {
  if (!outcome) return null;

  const outcomeMessage = outcome === 'win'
    ? `${playerChoice} beats ${computerChoice}`
    : outcome === 'lose'
    ? `${computerChoice} beats ${playerChoice}`
    : `Both chose ${playerChoice}`;

  return (
    <div className="outcome-container">
      <Alert
        message={`You ${outcome}!`}
        description={outcomeMessage}
        className={`outcome-alert ${outcome}`}
        type={outcome === 'win' ? 'success' : outcome === 'lose' ? 'error' : 'info'}
        showIcon
      />
      <Row gutter={16} justify="center" className="choice-display">
        <Col xs={24} sm={12}>
          <Card title="Your Choice" className="choice-card user-choice">
            <div className="choice-content">{playerChoice || '---'}</div>
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card title="Computer" className="choice-card computer-choice">
            <div className="choice-content">{computerChoice || '---'}</div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Outcome;
