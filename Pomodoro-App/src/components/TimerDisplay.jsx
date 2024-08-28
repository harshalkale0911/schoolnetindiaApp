import React from 'react';
import { Typography } from 'antd';
import './TimerDisplay.css'; // Import custom styles

const TimerDisplay = ({ timeLeft }) => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <Typography.Title level={1} className="timer-display">
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </Typography.Title>
    );
};

export default TimerDisplay;
