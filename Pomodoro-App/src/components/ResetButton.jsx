import React from 'react';
import { Button } from 'antd';
import './ResetButton.css'; // Import custom styles

const ResetButton = ({ setTimeLeft, setIsRunning, workDuration }) => {
    const handleClick = () => {
        setIsRunning(false);
        setTimeLeft(workDuration * 60); // Reset to work session duration
    };

    return (
        <Button className="reset-button" onClick={handleClick}>
            Reset
        </Button>
    );
};

export default ResetButton;
