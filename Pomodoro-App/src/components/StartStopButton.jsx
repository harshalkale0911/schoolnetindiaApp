import React from 'react';
import { Button } from 'antd';
import './StartStopButton.css'; // Import custom styles

const StartStopButton = ({ isRunning, setIsRunning, setTimerType, setTimeLeft, workDuration }) => {
    const handleClick = () => {
        if (isRunning) {
            setIsRunning(false);
        } else {
            setIsRunning(true);
            setTimerType('work');
            setTimeLeft(workDuration * 60); // Reset to work session duration
        }
    };

    return (
        <Button 
            type="primary" 
            className={`start-stop-button ${isRunning ? 'stop' : 'start'}`}
            onClick={handleClick}
        >
            {isRunning ? 'Stop' : 'Start'}
        </Button>
    );
};

export default StartStopButton;
